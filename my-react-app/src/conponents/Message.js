import styles from "./message.module.scss";

export function Message({user}) {

    return (
        <div className={styles.box}>
            <div className={styles.messageBox}>
                <p>{user.message}</p>
                <h4 className={styles.author}>:Hello {user.name}!</h4>
            </div>
        </div>
    );
}