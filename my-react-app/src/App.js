import "./App.css"
import {
  Container,
  Grid,
  makeStyles,
  FormControlLabel,
  Switch,
} from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { useState } from "react"
import { Chats, Messages } from "./components"

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

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const [checked, setChecked] = useState({
    checkedA: true,
    checkedB: false,
  })

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked })
    setIsDarkTheme(event.target.checked)
  }

  const theme = (theme) => {
    return theme ? darkTheme : lightTheme
  }

  return (
    <div>
      <header
        style={{
          color: "rgba(137,159,161,0.82)",
          height: 50,
          backgroundColor: "#091628",
        }}
      >
        <FormControlLabel
          labelPlacement="start"
          control={
            <Switch
              checked={checked.checkedB}
              onChange={handleChange}
              color="primary"
              name="checkedB"
            />
          }
          label="Dark"
        />
      </header>
      <ThemeProvider theme={theme(isDarkTheme)}>
        <Wrapper />
      </ThemeProvider>
    </div>
  )
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: theme.font.color,
      background: theme.background.color,
    },
  }
})

const Wrapper = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={4}>
            <Chats />
          </Grid>
          <Grid item={true} xs={8}>
            <Messages />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
