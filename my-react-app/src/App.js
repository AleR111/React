import {useState, useEffect, useCallback} from "react";

import './App.css';
import {Chats, Messages} from "./components";

export const App = () => {
    const [message, setMessage] = useState([])

    const [value, setValue] = useState('')

    const updateValue = useCallback((value) => {
        setValue(value)
    }, [])

    const sendMessage = useCallback(() => {
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
            <Chats/>
            <Messages message={message}
                      value={value}
                      updateValue={updateValue}
                      sendMessage={sendMessage}
            />
        </div>
    );
}
