import { SEND_MESSAGE, DELETE_CONVERSATION_MESSAGES } from "./types"

export const sendMessage = (message, chatId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    chatId,
  },
})

export const deleteConversationMessages = (contextChatId) => ({
  type: DELETE_CONVERSATION_MESSAGES,
  payload: contextChatId,
})
