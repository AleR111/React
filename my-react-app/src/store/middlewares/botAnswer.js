import { sendMessage } from "../messages"
import { SEND_MESSAGE } from "../messages/types"

export const botAnswer = (store) => (next) => (action) => {
  console.log(store.getState(), action)
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === "user"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(
          { author: "bot", message: "Hi, i'm bot, from middleware" },
          action.payload.chatId,
        ),
      )
    }, 1000)
  }
  return next(action)
}
