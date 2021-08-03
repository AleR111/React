import {useState, useEffect, useCallback} from "react";

import './App.css';
import {Message} from "./conponents/Message";

export const App = () => {
    const [message, setMessage] = useState([])

    const [value, setValue] = useState('')

    const sendMessage = useCallback(() => {       // не работает, все равно рендарится дочерний компонент
        setMessage(state => [...state, {content: value, author: 'Alex'}])
        setValue('')
    }, [value])

    useEffect(() => {

        if (!message.length || message[message.length - 1].author === 'Robot') return

        setTimeout(() => {
            setMessage(state => [...state, {content: "Hi, I'm Robot", author: 'Robot'}])
        }, 1500)

    }, [message])

    return (
        <div className="App">
            <Message message={message}
                     value={value}
                     updateValue={(value) => setValue(value)}
                     sendMessage={sendMessage}
            />
        </div>
    );
}
