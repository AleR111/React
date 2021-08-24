import { updateValue } from "../conversations"
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

export const sendMessageWithThunk = (message, chatId) => (dispatch) => {
  dispatch(sendMessage(message, chatId))
  dispatch(updateValue("", chatId))

  if (message.author === "user") {
    setTimeout(() => {
      dispatch(
        sendMessage(
          { author: "bot", message: "Hi, i'm bot, from thunk" },
          chatId,
        ),
      )
    }, 2000)
  }
}
