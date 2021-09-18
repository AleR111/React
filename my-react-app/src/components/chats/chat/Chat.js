import { Avatar, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import classNames from "classnames"
import {useSelector} from "react-redux";
import {getLastMessageOfChat} from "../../../store/messages";
import styles from "../chats.module.scss"
import { useStyles } from "../styles"

export const Chat = ({chatData, chatId, handleClick }) => {
  const classes = useStyles()

    const lastMessage = useSelector((state) => getLastMessageOfChat(state, chatData.id))

  return <ListItem
      button={true}
      selected={chatData.id === chatId}
      className={classNames(classes.item, classes.itemSelected)}
      variant="contained"
      color="primary"
      onContextMenu={handleClick(chatData.id)}
  >
      <ListItemIcon>
          <Avatar />
      </ListItemIcon>
      <ListItemText primary={chatData.title} />
      <div className={styles.time}>{lastMessage?.date}</div>
  </ListItem>
}
