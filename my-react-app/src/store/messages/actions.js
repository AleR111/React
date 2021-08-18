import { SEND_MESSAGE } from "./types"

export const sendMessage = (message, chatId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    chatId,
  },
})
