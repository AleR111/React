import { List, CircularProgress } from "@material-ui/core"
import { useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory, Link } from "react-router-dom"
import {
  getConversations,
  getConversationsFromDB,
} from "../../store/conversations"
import { getMessageFromDB } from "../../store/messages"
import { Chat } from "./chat"
import styles from "./chats.module.scss"
import { PopoverComp } from "./popover"
import { useStyles } from "./styles"

export const Chats = () => {
  const classes = useStyles()
  const { data } = useSelector((store) => store.authStore)
  const { chatId } = useParams()
  const { push } = useHistory()

  const { conversations, isPendingData, errorData } = useSelector(
    getConversations,
    (prev, next) => prev.conversations.length === next.conversations.length,
  )
  console.log(123232132323123)
  const [contextChatId, setContextChatId] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (id) => (event) => {
    setContextChatId(id)
    setAnchorEl(event.currentTarget)
  }

  const handlerEscape = useCallback(
    (e) => {
      if (e.code === "Escape") {
        push("/chat")
      }
    },
    [push],
  )

  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener("keydown", handlerEscape)
    return () => document.removeEventListener("keydown", handlerEscape)
  }, [handlerEscape])

  useEffect(() => {
    dispatch(getConversationsFromDB())
    dispatch(getMessageFromDB())
  }, [dispatch])

  if (errorData) {
    return <h4 className={styles.error}>{errorData}</h4>
  }

  return isPendingData ? (
    <CircularProgress />
  ) : (
    data && (
      <List
        className={classes.root}
        component="nav"
        aria-label="contacts"
        onContextMenu={(e) => e.preventDefault()}
      >
        {conversations?.map((elem) => (
          <Link className={classes.root} to={`/chat/${elem.id}`} key={elem.id}>
            <Chat handleClick={handleClick} chatData={elem} chatId={chatId} />
          </Link>
        ))}
        <PopoverComp
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          contextChatId={contextChatId}
          chatId={chatId}
        />
      </List>
    )
  )
}
