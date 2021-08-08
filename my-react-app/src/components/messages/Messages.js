import { Input, InputAdornment, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SendRounded } from "@material-ui/icons"
import classNames from "classnames"
import React, { useState, useEffect, useRef, useCallback } from "react"
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

  const scrollRef = useRef(0)

  const updateValue = (value) => {
    setValue(value)
  }

  const sendMessage = () => {
    if (!value) return
    setMessage((state) => [...state, { content: value, author: "user" }])
    setValue("")
  }

  const sendMessageKey = ({ code }) => {
    if (code === "Enter" && value) {
      setMessage((state) => [...state, { content: value, author: "user" }])
      setValue("")
    }
  }

  const scrollBottom = useCallback(() => {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollHeight)
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
    }
  }, [])

  useEffect(() => {
    scrollBottom()
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
  }, [message, scrollBottom])

  return (
    <>
      <div  className={classNames(classes.root, styles.recipient)}>
        <h4>friend</h4>
      </div>

      <div
        ref={scrollRef}
        className={classNames(classes.root, styles.messagesList)}
      >
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
        onKeyDown={sendMessageKey}
        endAdornment={
          <InputAdornment position="end">
            <IconButton color="primary" onClick={sendMessage}>
              {value && <SendRounded />}
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </>
  )
}
