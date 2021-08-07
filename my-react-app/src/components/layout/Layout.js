import styles from './layout.module.scss'

export const Layout = ({ Header, Chats, Messages }) => {
  return (
    <div className={styles.layout}>
      <div>{Header}</div>
      <div className={styles.content}>
        <div className={styles.chats}>{Chats}</div>
        <div className={styles.messages}>{Messages}</div>
      </div>
    </div>
  )
}
