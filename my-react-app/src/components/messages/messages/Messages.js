import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

import styles from "../message.module.scss"
import { MessageInput } from "./input"

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
    borderLeft: "1px solid rgba(0,0,0,0.27)",
  },
}))

export const Messages = ({
  currentConversation,
  scrollRef,
  message,
  inputRef,
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
          return (
            <div
              className={classNames(styles.messageBox, classes.message, {
                [classes.userMessage]: elem.author === "user",
              })}
              key={id}
            >
              <p>{elem.message}</p>
              <div className={styles.time}>{elem.date}</div>
            </div>
          )
        })}
      </div>
      {errorSendMessage && <h2>{errorSendMessage}df</h2>}
      <MessageInput
        isPendingSendMessage={isPendingSendMessage}
        inputRef={inputRef}
      />
    </>
  )
}
