import {
  UPDATE_VALUE,
  DELETE_CONVERSATION,
  CREATE_NEW_CONVERSATION,
} from "./types"

const initialState = {
  conversations: [
    { id: "chat123", title: "Keeley Lon", value: "" },
    { id: "chat241", title: "Angelle Jonty", value: "" },
    { id: "chat426", title: "Myra Justy", value: "" },
  ],
}

const getId = () => {
  const data = new Date()
  return data.getTime()
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
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
          { id: `chat${getId()}`, title: action.payload, value: "" },
        ],
      }
    default:
      return state
  }
}
