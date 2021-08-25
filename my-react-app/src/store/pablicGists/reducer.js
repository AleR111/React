import { loadingStart, loadingSuccess, loadingError } from "./types"

const initialState = {
  data: [],
  isPending: false,
  error: "",
}

export const publicGistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingStart:
      return {
        ...state,
        isPending: true,
      }
    case loadingSuccess:
      return {
        ...state,
        isPending: false,
        data: action.payload,
      }
    case loadingError:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      }
    default:
      return state
  }
}
