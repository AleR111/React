import { Input, InputAdornment, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SendRounded } from "@material-ui/icons"
import classNames from "classnames"
import React, { useState, useEffect, useRef } from "react"
import styles from "./message.module.scss"

// import styles from "./message.module.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.font.color,
    background: theme.background.color,
  },
  inline: {
    display: "inline",
  },
  input: {
    marginTop: "4px",
    backgroundColor: "#353f4b",
    color: "#9a9fa1",
    padding: "10px 15px",
    fontSize: " 15px",
    borderLeft: "1px solid #000",
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
    setMessage((state) => [...state, { content: value, author: "user" }])
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
      <div>
        <h4>friend</h4>
      </div>

      <div className={classNames(classes.root, styles.messagesList)}>
        {message.map((elem, id) => (
          <div
            className={classNames(styles.messageBox, {
              [styles.messageBoxUser]: elem.author === "user",
            })}
            key={id}
          >
            <p>{elem.content}</p>
            <div className={styles.time}>1:59</div>
          </div>
        ))}
      </div>

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
