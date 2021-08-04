import styles from "./message.module.scss";

import {useState, useEffect, useMemo} from "react";

export const Messages = () => {
    const [message, setMessage] = useState([])

    const [value, setValue] = useState('')

    const updateValue = (value) => {
        setValue(value)
    }

    const sendMessage = () => {
        setMessage(state => [...state, {content: value, author: 'Alex'}])
        setValue('')
    }

    useEffect(() => {

        if (!message.length || message[message.length - 1].author === 'Robot') return

        setTimeout(() => {
            setMessage(state => [...state, {content: "Hi, I'm Robot", author: 'Robot'}])
        }, 1500)

    }, [message])

    return (
        <div className={styles.box}>

            {
                message.map((elem, id) => (
                    <div className={styles.messageBox} key={id}>
                        <p>{elem.content}</p>
                        <h4 className={styles.author}>{elem.author}</h4>
                    </div>
                ))
            }

            <div className={styles.messageInput}>
                <input type="text" value={value} onChange={(e) => updateValue(e.target.value)}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}