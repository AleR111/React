import { createStore, combineReducers } from "redux";
import { switcherReducer } from "./themeSwitcher";

export const store = createStore(
    combineReducers({
        themeSwitcher: switcherReducer,
    })
);