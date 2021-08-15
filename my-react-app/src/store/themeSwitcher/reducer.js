import { SWITCHER } from "./types"

const initialState = {
  theme: "dark",
}

export const switcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCHER:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      }
    default:
      return state
  }
}
