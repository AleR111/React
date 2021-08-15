import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { store } from "./store"

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
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={themes.dark}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
