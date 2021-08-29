import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import { firebaseApp } from "./api/firebase"
import { HeaderContainer } from "./components"
import { Chat, Page404, Profile, SignIp, SignUp } from "./pages"
import { PublicGistsApi } from "./pages/publicGistsApi"
import { PrivatePage, PublicPage } from "./route"

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
    burger: {
      color: "#000",
    },
    chats: {
      backgroundColor: "#d7dad9",
    },
    messagesList: {
      backgroundColor: "#badde5",
      border: "4px solid #357b58e3",
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

  const [auth, setAuth] = useState()

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      user ? setAuth(user) : setAuth(false)
    })
  }, [])

  return (
    <ThemeProvider theme={themes[themeApp]}>
      <div className={"App"}>
        <HeaderContainer auth={auth} />

        <Switch>
          <PrivatePage auth={auth} path={"/chat"} component={Chat} />
          <PrivatePage auth={auth} path={"/profile"} component={Profile} />
          <Route path={"/public_gists_api"} component={PublicGistsApi} />
          <PublicPage auth={auth} path={"/sign-in"} component={SignIp} />
          <PublicPage auth={auth} path={"/sign-up"} component={SignUp} />
          <Route path={"*"} component={Page404} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}
