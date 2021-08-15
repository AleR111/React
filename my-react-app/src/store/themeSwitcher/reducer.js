import { DARK, LIGHT } from "./types"

const initialState = {
  theme: "dark",
}

export const switcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK:
      return {
        ...state,
        theme: "dark",
      }
    case LIGHT:
      return {
        ...state,
        theme: "light",
      }
    default:
      return state
  }
}
