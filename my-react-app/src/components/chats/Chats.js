import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Popover,
  Paper,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Delete } from "@material-ui/icons"
import classNames from "classnames"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams, useHistory } from "react-router-dom"
import { deleteConversation, getConversations } from "../../store/conversations"
import { deleteConversationMessages } from "../../store/messages"
import styles from "./chats.module.scss"

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

  const history = useHistory()

  const [contextChatId, setContextChatId] = useState(null)

  const { chatId } = useParams()

  const conversations = useSelector(getConversations)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (id) => (event) => {
    setContextChatId(id)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const dispatch = useDispatch()

  const deleteChat = () => {
    dispatch(deleteConversation(contextChatId))
    dispatch(deleteConversationMessages(contextChatId))
    handleClose()
    if (contextChatId === chatId) history.push("/chat")
  }
  return (
    <List
      className={classes.root}
      component="nav"
      aria-label="contacts"
      onContextMenu={(e) => e.preventDefault()}
    >
      {conversations.map((elem) => (
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
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Paper variant="outlined">
          <Button
            onClick={deleteChat}
            variant="contained"
            startIcon={<Delete />}
          >
            Delete
          </Button>
        </Paper>
      </Popover>
    </List>
  )
}

const getAvatar = (name) => {
  return name.match(/[A-Z]/g).join("")
}
