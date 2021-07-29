import './App.css';

import { Message } from "./conponents/Message";

const user = {name: 'ololo'}

export function App() {
  return (
    <div className="App">
      <Message user={user}/>
    </div>
  );
}
