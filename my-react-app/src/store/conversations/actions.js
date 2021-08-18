import { UPDATE_VALUE, DELETE_CONVERSATION } from "./types"

export const updateValue = (value, chatId) => ({
  type: UPDATE_VALUE,
  payload: { value, chatId },
})

export const deleteConversation = (contextChatId) => ({
  type: DELETE_CONVERSATION,
  payload: contextChatId,
})
