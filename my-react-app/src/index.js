import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Layout, Header, Chats, Messages } from "./components"

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
    <ThemeProvider theme={themes.dark}>
      <Layout Header={<Header />} Chats={<Chats />} Messages={<Messages />} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
