import {
  IconButton,
  Input,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SendRounded } from "@material-ui/icons"
import classNames from "classnames"
import styles from "../message.module.scss"

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
  currentConversation,
  scrollRef,
  message,
  inputRef,
  sendMessageKey,
  handleSendMessage,
  value,
  onUpdateValue,
  isPendingData,
  isPendingSendMessage,
  errorData,
  errorSendMessage,
}) => {
  const classes = useStyles()

  if (errorData) {
    return <h2 className={styles.error}>{errorData}</h2>
  }

  return isPendingData ? (
    <CircularProgress />
  ) : (
    <>
      <div className={classNames(classes.messagesHeader, styles.recipient)}>
        <h4>{currentConversation?.title}</h4>
      </div>
      <div
        ref={scrollRef}
        className={classNames(classes.massages, styles.messagesList)}
      >
        {message?.map((elem, id) => {
          console.log(elem)
          return <div
              className={classNames(styles.messageBox, classes.message, {
                [classes.userMessage]: elem.author === "user",
              })}
              key={id}
          >
            <p>{elem.message}</p>
            <div className={styles.time}>{elem.date}</div>
          </div>
        })}
      </div>
      {errorSendMessage && <h2>{errorSendMessage}df</h2>}
      <Input
        className={classes.input}
        inputRef={inputRef}
        fullWidth={true}
        placeholder="Write a message..."
        autoFocus={true}
        onKeyDown={(e) => {
          sendMessageKey(e.code)
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton color="primary" onClick={() => handleSendMessage()}>
              {isPendingSendMessage ? (
                <CircularProgress />
              ) : (
                value && <SendRounded />
              )}
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onChange={(e) => onUpdateValue(e)}
      />
    </>
  )
}
