import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import { useState } from "react"
import { Link, useRouteMatch } from "react-router-dom"
import styles from "./chats.module.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.font.color,
    // background: 'rgba(27, 33, 47, 0.96)',
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

export const Chats = ({ conversation }) => {
  const match = useRouteMatch()
  console.log(match.url)
  const classes = useStyles()

  const [selectedChat, setSelectedChat] = useState(null)

  const selectChat = (id) => {
    setSelectedChat(id)
  }

  return (
    <List className={classes.root} component="nav" aria-label="contacts">
      {conversation.map((elem) => (
        <Link to={`/chat/${elem.id}`} key={elem.id}>
          <ListItem
            button={true}
            selected={elem.id === selectedChat}
            onClick={() => selectChat(elem.id)}
            className={classNames(classes.item, classes.itemSelected)}
          >
            <ListItemIcon>
              <Avatar>{getAvatar(elem.title)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={elem.title} />
            <div className={styles.time}>15:25</div>
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

const getAvatar = (name) => {
  return name.match(/[A-Z]/g).join("")
}
