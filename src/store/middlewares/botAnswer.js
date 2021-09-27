import { sendMessageSuccess } from "../messages"
import { SEND_MESSAGE_SUCCESS } from "../messages/types"

export const botAnswer = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE_SUCCESS &&
    action.payload.message.author === "user"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessageSuccess(
          { author: "bot", message: "Hi, i'm bot, from middleware" },
          action.payload.chatId,
        ),
      )
    }, 1000)
  }
  return next(action)
}
