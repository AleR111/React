import { UPDATE_VALUE, DELETE_CONVERSATION, CREATE_NEW_CONVERSATION } from "./types"

const initialState = {
  conversations: [
    { id: "chat123", title: "Keeley Lon", value: "" },
    { id: "chat241", title: "Angelle Jonty", value: "" },
    { id: "chat426", title: "Myra Justy", value: "" },
  ],
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((elem) => {
          if (elem.id === action.payload.chatId)
            return {
              id: elem.id,
              title: elem.title,
              value: action.payload.value,
            }
          return elem
        }),
      }
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter((elem) => elem.id !== action.payload
        ),
      }
    case CREATE_NEW_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, { id: "chat4261", title: action.payload, value: "" }]
      }
    default:
      return state
  }
}
