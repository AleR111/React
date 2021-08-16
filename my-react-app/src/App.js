import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import { Header } from "./components"
import { Chat, Page404, Profile } from "./pages"

const themes = {
  dark: createTheme({
    font: {
      color: "rgba(255,255,255,0.89)",
    },
    background: {
      color: "#19181f",
    },
  }),

  light: createTheme({
    font: {
      color: "rgba(0,0,0,0.89)",
    },
    background: {
      color: "#ffffff",
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
    console.log(themes[themeApp])
  return (
    <ThemeProvider theme={themes[themeApp]}>
      <div className={"App"}>

          <Header />

        <Switch>
          <Route path={"/chat"}>
            <Chat />
          </Route>
          <Route path={"/profile"}>
            <Profile />
          </Route>
          <Route path={"*"}>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  )
}
