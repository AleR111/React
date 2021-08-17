import { createStore, combineReducers } from "redux"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"
import { switcherReducer } from "./themeSwitcher"

export const store = createStore(
  combineReducers({
    themeSwitcher: switcherReducer,
    conversationsStore: conversationsReducer,
    messagesStore: messagesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
