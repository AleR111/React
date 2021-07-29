import './App.css';

import {Message} from "./conponents/Message";

const user = {
    name: 'ololo',
    message: "What's up?"
}

export function App() {
    return (
        <div className="App">
            <Message user={user}/>
        </div>
    );
}
