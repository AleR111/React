import styles from './layout.module.scss'

export const Layout = ({ chats, children }) => {
  return (
      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{children}</div>
      </div>
  )
}
