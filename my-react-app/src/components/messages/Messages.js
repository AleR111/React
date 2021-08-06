import {
  Input,
  InputAdornment,
  IconButton,
  Grid,
  Paper,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SendRounded } from "@material-ui/icons"

import { useState, useEffect, useRef } from "react"

// import styles from "./message.module.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export const Messages = () => {
  const classes = useStyles()

  const [message, setMessage] = useState([])

  const [value, setValue] = useState("")

  const inputRef = useRef(null)

  const updateValue = (value) => {
    setValue(value)
  }

  const sendMessage = () => {
    setMessage((state) => [...state, { content: value, author: "Alex" }])
    setValue("")
  }

  useEffect(() => {
    if (!message.length || message[message.length - 1].author === "Robot")
      return

    setTimeout(() => {
      setMessage((state) => [
        ...state,
        { content: "Hi, I'm Robot", author: "Robot" },
      ])
    }, 1500)

    inputRef.current?.focus()
  }, [message])

  return (
    <div>
      <Grid container={true} spacing={2}>
        {message.map((elem, id) => (
          <Grid item={true} xs={12} key={id}>
            <Paper variant="outlined" elevation={0} className={classes.paper}>
              <Grid container={true} spacing={2}>
                <Grid item={true} xs={10}>
                  <Paper
                    variant="outlined"
                    elevation={0}
                    className={classes.paper}
                  >
                    <p>{elem.content}</p>
                  </Paper>
                </Grid>
                <Grid item={true} xs={2}>
                  <Paper
                    variant="outlined"
                    elevation={0}
                    className={classes.paper}
                  >
                    <h4>{elem.author}</h4>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Input
        inputRef={inputRef}
        fullWidth={true}
        placeholder="Write a message..."
        autoFocus={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton color="primary" onClick={sendMessage}>
              <SendRounded />
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </div>
  )
}
