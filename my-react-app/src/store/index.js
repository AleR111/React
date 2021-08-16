import { createStore, combineReducers } from "redux"
import { switcherReducer } from "./themeSwitcher"

export const store = createStore(
  combineReducers({
    themeSwitcher: switcherReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
