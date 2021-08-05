import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import { App } from "./App"

const darkTheme = createTheme({
  font: {
    color: "rgba(255,255,255,0.89)",
  },
  background: {
    color: "#19181f",
  },
})

const lightTheme = createTheme({
    font: {
        color: "rgba(0,0,0,0.89)",
    },
    background: {
        color: "#ffffff",
    },
})

const theme = () => {
    console.log(lightTheme)
   return darkTheme
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme()}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
