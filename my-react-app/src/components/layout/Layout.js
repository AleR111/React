import {makeStyles} from "@material-ui/core/styles";
import styles from './layout.module.scss'


const useStyles = makeStyles((theme) => ({
    chats: {
        backgroundColor: theme.chats.backgroundColor
    }
}))

export const Layout = ({ chats, children }) => {
    const classes = useStyles()

  return (
      <div className={styles.content}>
        <div className={classes.chats}>{chats}</div>
        <div className={styles.messages}>{children}</div>
      </div>
  )
}
