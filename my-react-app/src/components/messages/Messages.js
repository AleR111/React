import { Input, InputAdornment, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SendRounded } from "@material-ui/icons"
import classNames from "classnames"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import styles from "./message.module.scss"

// import styles from "./message.module.scss"

const useStyles = makeStyles((theme) => ({
  messagesHeader: {
    width: "100%",
    color: theme.font.color,
    backgroundColor: theme.chats.backgroundColor,
  },
  massages: {
    width: "100%",
    color: theme.font.color,
    backgroundColor: theme.messagesList.backgroundColor,
    borderTop: theme.messagesList.border,
    borderBottom: theme.messagesList.border,
  },
  inline: {
    display: "inline",
  },
  message: {
    backgroundColor: theme.companionMessage.backgroundColor,
  },
  userMessage: {
    marginLeft: "auto",
    marginRight: 0,
    backgroundColor: theme.userMessage.backgroundColor,
  },
  input: {
    backgroundColor: theme.messagesInput.backgroundColor,
    color: "#9a9fa1",
    padding: "10px 15px",
    fontSize: " 15px",
    borderLeft: "1px solid #000",
  },
}))

export const Messages = ({
  messages,
  updateValue,
  value,
  sendMessage,
  sendMessageKey,
}) => {
  const classes = useStyles()

  const { chatId } = useParams()
  const message = messages[chatId] || []

  const inputRef = useRef(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    inputRef.current?.focus()
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
  }, [chatId, messages])

  return (
    <>
      <div className={classNames(classes.messagesHeader, styles.recipient)}>
        <h4>friend</h4>
      </div>

      <div
        ref={scrollRef}
        className={classNames(classes.massages, styles.messagesList)}
      >
        {message.map((elem, id) => (
          <div
            className={classNames(styles.messageBox, classes.message, {
              [classes.userMessage]: elem.author === "user",
            })}
            key={id}
          >
            <p>{elem.message}</p>
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
        onKeyDown={(e) => {
          sendMessageKey(e.code, value)
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton color="primary" onClick={() => sendMessage(value)}>
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
