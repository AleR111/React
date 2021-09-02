import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { authReducer } from "./auth"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"
import { botAnswer } from "./middlewares/botAnswer"
import { publicGistsReducer } from "./publicGists"
import { switcherReducer } from "./themeSwitcher"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["themeSwitcher", 'conversationsStore'],
}

const rootPersistReducer = persistReducer(
  persistConfig,
  combineReducers({
    themeSwitcher: switcherReducer,
    conversationsStore: conversationsReducer,
    messagesStore: messagesReducer,
    publicGistsStore: publicGistsReducer,
    authStore: authReducer,
  }),
)

export const store = createStore(
  rootPersistReducer,
  compose(
    applyMiddleware(botAnswer, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
)

export const rootPersistStore = persistStore(store)
