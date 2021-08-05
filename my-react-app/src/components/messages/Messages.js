import { Input, InputAdornment, IconButton } from "@material-ui/core"

import { SendRounded } from "@material-ui/icons"

import { useState, useEffect, useRef } from "react"
import styles from "./message.module.scss"

export const Messages = () => {
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
    <div className={styles.box}>
      {message.map((elem, id) => (
        <div className={styles.messageBox} key={id}>
          <p>{elem.content}</p>
          <h4 className={styles.author}>{elem.author}</h4>
        </div>
      ))}

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
