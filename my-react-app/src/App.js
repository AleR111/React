import {useState} from "react";

import './App.css';
import {Message} from "./conponents/Message";

const useMyState = () => {
    const [message, setMessage] = useState([{content: 'kek', author: 'lol'}, {content: 'kek', author: 'lol'}])

    return {message, setMessage}
}

export function App() {
    const {message, setMessage} = useMyState()

    return (
        <div className="App">
            <Message message={message}/>
        </div>
    );
}
