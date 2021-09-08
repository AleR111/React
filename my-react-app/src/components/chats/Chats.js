import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  CircularProgress,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import classNames from "classnames"
import { useState, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useParams, useHistory } from "react-router-dom"
import { getConversations } from "../../store/conversations"

import styles from "./chats.module.scss"
import { PopoverComp } from "./popover"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.font.color,
    // background: 'rgba(27, 33, 47, 0.96)',
  },
  chats: {
    backgroundColor: theme.chats.backgroundColor,
  },
  itemSelected: {
    "&.Mui-selected": {
      backgroundColor: "#2b5278",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#2b5278",
    },
  },
  item: {
    "&:hover": {
      backgroundColor: "rgba(43,82,120,0.32)",
    },
  },
}))

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
      {conversations?.map((elem) => (
        <Link to={`/chat/${elem.id}`} key={elem.id}>
          <ListItem
            button={true}
            selected={elem.id === chatId}
            className={classNames(classes.item, classes.itemSelected)}
            variant="contained"
            color="primary"
            onContextMenu={handleClick(elem.id)}
          >
            <ListItemIcon>
              <Avatar>{getAvatar(elem.title)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={elem.title} />
            <div className={styles.time}>15:25</div>
          </ListItem>
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
}

const getAvatar = (name) => {
  return name.match(/[A-Z]/g).join("")
}
