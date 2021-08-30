import {
  UPDATE_VALUE,
  DELETE_CONVERSATION,
  CREATE_NEW_CONVERSATION,
  GET_CONVERSATIONS_FROM_DB,
} from "./types"

const initialState = {
  conversations: [],
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS_FROM_DB:
      return {
        ...state,
        conversations: [...action.payload],
      }
    case UPDATE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversations) => {
          if (conversations.id === action.payload.chatId)
            return {
              ...conversations,
              value: action.payload.value,
            }
          return conversations
        }),
      }
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (elem) => elem.id !== action.payload,
        ),
      }
    case CREATE_NEW_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...state.conversations,
          { ...action.payload, value: "" },
        ],
      }
    default:
      return state
  }
}
