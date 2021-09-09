import {List, CircularProgress} from "@material-ui/core"
import { useState, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import {useParams, useHistory, Link} from "react-router-dom"
import { getConversations } from "../../store/conversations"
import { Chat } from "./chat"
import styles from "./chats.module.scss"
import { PopoverComp } from "./popover"
import { useStyles } from "./styles"

export const Chats = () => {
  const classes = useStyles()

  const { chatId } = useParams()
  const { push } = useHistory()

  const { conversations, isPendingData, errorData } =
    useSelector(getConversations)

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

  useEffect(() => {
    document.addEventListener("keydown", handlerEscape)
    return () => document.removeEventListener("keydown", handlerEscape)
  }, [handlerEscape])

  if (errorData) {
    return <h4 className={styles.error}>{errorData}</h4>
  }

  return isPendingData ? (
    <CircularProgress />
  ) : (
    <List
      className={classes.root}
      component="nav"
      aria-label="contacts"
      onContextMenu={(e) => e.preventDefault()}
    >
      {
        conversations?.map((elem) => (
            <Link to={`/chat/${elem.id}`} key={elem.id}>
              <Chat handleClick={handleClick} chatData={elem}/>
            </Link>
        ))
      }
      <PopoverComp
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        contextChatId={contextChatId}
        chatId={chatId}
      />
    </List>
  )
}
