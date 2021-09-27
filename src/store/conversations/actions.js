import {
  UPDATE_VALUE,
  DELETE_CONVERSATION,
  CREATE_NEW_CONVERSATION_SUCCESS,
} from "./types"

export const updateValue = (value, chatId) => ({
  type: UPDATE_VALUE,
  payload: { value, chatId },
})

export const deleteConversation = (contextChatId) => ({
  type: DELETE_CONVERSATION,
  payload: contextChatId,
})

export const createNewConversationSuccess = (id, title) => ({
  type: CREATE_NEW_CONVERSATION_SUCCESS,
  payload: { id, title },
})
