import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat, Page404 } from "./pages"

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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themes.dark}>
        <Switch>
          <Route path={"/chat"}>
            <Chat />
          </Route>
          <Route path={"*"}>
            <Page404 />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)
