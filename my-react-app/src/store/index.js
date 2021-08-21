import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"
import { botAnswer } from "./middlewares/botAnswer"
import { switcherReducer } from "./themeSwitcher"

export const store = createStore(
  combineReducers({
    themeSwitcher: switcherReducer,
    conversationsStore: conversationsReducer,
    messagesStore: messagesReducer,
  }),
  compose(
    applyMiddleware(botAnswer, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
)
