import {
  OPEN_MODAL,
    CLOSE_MODAL
} from "./types"

const initialState = {
 isOpenedModal: false
}


export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpenedModal: true
      }
    case CLOSE_MODAL:
    return {
        ...state,
        isOpenedModal: false
      }
    default:
      return state
  }
}
