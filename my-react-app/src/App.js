import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import { HeaderContainer } from "./components"
import { Chat, Page404, Profile, SignIp, SignUp } from "./pages"
import { PublicGistsApi } from "./pages/publicGistsApi"
import { PrivatePage, PublicPage } from "./route"
import { requestAuth } from "./store/auth/thunks"
// import { getConversationsFromDB } from "./store/conversations"
// import { getMessageFromDB } from "./store/messages"

const themes = {
  dark: createTheme({
    font: {
      color: "rgba(255,255,255,0.89)",
    },
    background: {
      color: "#19181f",
    },
    fontColor: {
      color: "rgba(255,255,255,0.89)",
    },
    header: {
      backgroundColor: "#212227",
    },
    drawer: {
      backgroundColor: "rgb(45,48,51)",
    },
    burger: {
      color: "#fff",
    },
    chats: {
      backgroundColor: "#242a37",
    },
    messagesList: {
      backgroundColor: "#19181f",
      border: "4px solid #09141f",
    },
    messagesInput: {
      backgroundColor: "#353f4b",
    },
    userMessage: {
      backgroundColor: "#2b5278",
    },
    companionMessage: {
      backgroundColor: "#353f4b",
    },
  }),

  light: createTheme({
    font: {
      color: "rgba(0,0,0,0.89)",
    },
    background: {
      color: "#ffffff",
    },
    header: {
      backgroundColor: "#edf4f6",
    },
    drawer: {
      backgroundColor: "#edf4f6",
    },
    burger: {
      color: "#000",
    },
    chats: {
      backgroundColor: "#d7dad9",
    },
    messagesList: {
      backgroundColor: "rgba(157,190,186,0.47)",
      border: "4px solid #357b5821",
    },
    messagesInput: {
      backgroundColor: "#f2f8fc",
    },
    userMessage: {
      backgroundColor: "#76ada2",
    },
    companionMessage: {
      backgroundColor: "#7f8db2",
    },
  }),
}

export const App = () => {
  const selectorTheme = useMemo(
    () => (state) => {
      return state.themeSwitcher.theme
    },
    [],
  )

  const themeApp = useSelector(selectorTheme)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getMessageFromDB())
  //   dispatch(getConversationsFromDB())
  // }, [dispatch])

  useEffect(() => {
    ////useLayoutEffect чтоб не мигал сначала чат, потом загрузка и снова чат при перезагрузке страницы
    dispatch(requestAuth())
  }, [dispatch])

  return (
    <ThemeProvider theme={themes[themeApp]}>
      <div className={"App"}>
        <HeaderContainer />

        <Switch>
          <PublicPage path={"/sign-in"} component={SignIp} />
          <PublicPage path={"/sign-up"} component={SignUp} />
          <PrivatePage path={"/chat"} component={Chat} />
          <PrivatePage path={"/profile"} component={Profile} />
          <Route path={"/public_gists_api"} component={PublicGistsApi} />
          <Route path={"*"} component={Page404} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}
