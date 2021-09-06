import {
  SEND_MESSAGE,
  DELETE_CONVERSATION_MESSAGES,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_START,
  LOADING_DATA_ERROR,
  SEND_MESSAGE_START,
  SEND_MESSAGE_ERROR,
} from "./types"

const initialState = {
  messages: {
    chat123: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot", date: new Date() },
    ],
    chat241: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot, lol", date: new Date() },
    ],
    chat426: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot", date: new Date() },
    ],
  },
  isPending: { data: false, sendMessage: false },
  isPendingData: false,
  isPendingSendMessage: false,
  errorData: "",
  errorSendMessage: "",
}

const deleteMessages = (state, id) => {
  const newMessages = {}
  for (const elem in state.messages) {
    if (elem !== id) newMessages[elem] = state.messages[elem]
  }
  return newMessages
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA_START:
      return {
        ...state,
        isPendingData: true,
      }
    case LOADING_DATA_SUCCESS:
      return {
        ...state,
        isPendingData: false,
        messages: { ...action.payload },
      }
    case LOADING_DATA_ERROR:
      return {
        ...state,
        isPendingData: false,
        errorData: action.payload,
      }
    case SEND_MESSAGE_START:
      return {
        ...state,
        isPendingSendMessage: true,
      }
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] || []),
            { ...action.payload.message, date: new Date() },
          ],
        },
        isPendingSendMessage: false,
      }
    case DELETE_CONVERSATION_MESSAGES:
      return {
        ...state,
        messages: deleteMessages(state, action.payload),
      }
    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        isPendingSendMessage: false,
        errorSendMessage: action.payload,
      }
    default:
      return state
  }
}
