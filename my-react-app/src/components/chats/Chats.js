import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@material-ui/core"
import { useState } from "react"

export const Chats = () => {
  const [chatsList] = useState([
    { id: 123, name: "Keeley Lon" },
    { id: 235, name: "Angelle Jonty" },
    { id: 543, name: "Myra Justy" },
    { id: 563, name: "Dwain Bette" },
    { id: 432, name: "Brenton Oli" },
  ])

  const getAvatar = (name) => {
    return name.match(/[A-Z]/g).join("")
  }

  return (
    <List component="nav" aria-label="contacts">
      {chatsList.map((elem) => (
        <ListItem button={true} key={elem.id}>
          <ListItemIcon>
            <Avatar>{getAvatar(elem.name)}</Avatar>
          </ListItemIcon>
          <ListItemText primary={elem.name} />
        </ListItem>
      ))}
    </List>
  )
}
