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
// import styles from "./chats.module.scss"

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

export const Chats = () => {
  const classes = useStyles()

  const [selectedChat, setSelectedChat] = useState(null)

  const [chatsList] = useState([
    { id: 123, name: "Keeley Lon" },
    { id: 235, name: "Angelle Jonty" },
    { id: 543, name: "Myra Justy" },
    { id: 563, name: "Dwain Bette" },
    { id: 432, name: "Brenton Oli" },
  ])

  // const selectChat = (id) => {
  //   setSelectedChat(id)
  // }

  return (
    <List className={classes.root} component="nav" aria-label="contacts">
      {chatsList.map((elem) => (
        <ListItem
          button={true}
          key={elem.id}
          selected={elem.id === selectedChat}
          onClick={() => setSelectedChat(elem.id)}
          className={classNames(classes.item, classes.itemSelected)}
        >
          <ListItemIcon>
            <Avatar>{getAvatar(elem.name)}</Avatar>
          </ListItemIcon>
          <ListItemText primary={elem.name} />
        </ListItem>
      ))}
    </List>
  )
}

const getAvatar = (name) => {
  return name.match(/[A-Z]/g).join("")
}
