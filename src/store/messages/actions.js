import { SEND_MESSAGE_SUCCESS, DELETE_CONVERSATION_MESSAGES } from "./types"

export const sendMessageSuccess = (message, chatId) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: {
    message,
    chatId,
  },
})

export const deleteConversationMessages = (contextChatId) => ({
  type: DELETE_CONVERSATION_MESSAGES,
  payload: contextChatId,
})
