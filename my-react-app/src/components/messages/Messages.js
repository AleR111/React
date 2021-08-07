import {
  Input,
  InputAdornment,
  IconButton,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  List,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SendRounded } from "@material-ui/icons"
import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react"
import styles from './message.module.scss'




// import styles from "./message.module.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    color: theme.font.color,
    background: theme.background.color,
  },
  inline: {
    display: "inline",
  },
  input: {
    color: "#9a9fa1",
    padding: "10px 15px",
    fontSize: " 15px",
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
    if (!message.length || message[message.length - 1].author === "Robot") {
      return
    }

    setTimeout(() => {
      setMessage((state) => [
        ...state,
        { content: "Hi, I'm Robot", author: "Robot" },
      ])
    }, 1500)

    inputRef.current?.focus()
  }, [message])

  return (
   <>

      <List className={classNames(classes.root, styles.messagesList)}>
        {message.map((elem, id) => (
          <div key={id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary={elem.author} secondary={elem.content} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>


      <Input
          className={classes.input}
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
    </>
  )
}
