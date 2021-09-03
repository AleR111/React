import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"
import { reducers } from "../store"

export const renderWithRedux = (component, { initialState }) => {
    const store = createStore(reducers, initialState)

    return {
        store,
        ...render(
            <Provider store={store}>
                <BrowserRouter>{component}</BrowserRouter>
            </Provider>,
        ),
    }
}