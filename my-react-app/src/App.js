import { ThemeProvider } from "@material-ui/core/styles"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import { HeaderContainer } from "./components"
import { Chat, Page404, Profile, SignIp, SignUp } from "./pages"
import { PublicGistsApi } from "./pages/publicGistsApi"
import { PrivatePage, PublicPage } from "./route"
import { requestAuth } from "./store/auth/thunks"
import {themes} from './themes'

export const App = () => {
  const selectorTheme = useMemo(
    () => (state) => {
      return state.themeSwitcher.theme
    },
    [],
  )

  const themeApp = useSelector(selectorTheme)
  const dispatch = useDispatch()

  useEffect(() => {
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
