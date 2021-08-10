import styles from './layout.module.scss'

export const Layout = ({ Chats, Messages }) => {
  return (
      <div className={styles.content}>
        <div className={styles.chats}>{Chats}</div>
        <div className={styles.messages}>{Messages}</div>
      </div>
  )
}
