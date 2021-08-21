import { SEND_MESSAGE, DELETE_CONVERSATION_MESSAGES } from "./types"

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
      }
    case DELETE_CONVERSATION_MESSAGES:
      return {
        ...state,
        messages: deleteMessages(state, action.payload),
      }
    default:
      return state
  }
}
