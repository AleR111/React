import styles from "../style/message.module.scss";

export function Message(props) {

    const {user} = props
    return (
        <div className={styles.box}>
            <h4 className={styles.message}>Hello {user.name}!</h4>
            <p>{user.message}</p>
        </div>
    );
}