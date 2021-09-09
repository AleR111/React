import { Avatar, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import classNames from "classnames"
import { Link } from "react-router-dom"
import styles from "../chats.module.scss"
import { useStyles } from "../styles"

const getAvatar = (name) => {
  return name.match(/[A-Z]/g).join("")
}

export const Chat = ({ conversations, chatId, handleClick }) => {
  const classes = useStyles()
  return conversations?.map((elem) => (
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
        <div className={styles.time}>6</div>
      </ListItem>
    </Link>
  ))
}
