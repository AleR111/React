import {useState, useEffect} from "react";

import './App.css';
import {Message} from "./conponents/Message";

const useMyState = () => {
    const [message, setMessage] = useState([])

    const [value, setValue] = useState('')

    return {message, setMessage, value, setValue}
}

export function App() {
    const {message, setMessage, value, setValue} = useMyState()

    // const updateValue = (value) => {
    //     setValue(value)
    // }

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
        <div className="App">
            <Message message={message}
                     value={value}
                     updateValue={(value) => setValue(value)}
                     sendMessage={sendMessage}
            />
        </div>
    );
}
