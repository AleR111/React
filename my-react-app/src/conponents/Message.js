import styles from "../style/message.module.scss";

export function Message(props) {

    const { user } = props
    return (
        <div className={styles.box +  ' ' + styles.message}>Hello {user.name}!</div>
    );
}