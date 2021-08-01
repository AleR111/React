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

    const updateValue = (value) => {
        setValue(value)
    }

    const sendMessage = () => {
        setMessage(state => [...state, {content: value, author: 'lol'}])
        setValue('')
    }

    return (
        <div className="App">
            <Message message={message}
                     value={value}
                     updateValue={updateValue}
                     sendMessage={sendMessage}
            />
        </div>
    );
}
