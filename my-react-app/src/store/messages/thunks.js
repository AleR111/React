import { database } from "../../api/firebase"
import { updateValue } from "../conversations"
import { sendMessage } from "./actions"
import { GET_MESSAGES_FROM_DB } from "./types"

export const getMessageFromDB = () => async (dispatch) => {
  try {
    await database
      .ref("messages")
      .get()
      .then((snapshot) => {
        const messages = {}
        snapshot.forEach((data) => {
          messages[data.key] = Object.values(data.val())
        })
        dispatch({ type: GET_MESSAGES_FROM_DB, payload: messages })
      })
  } catch (error) {
    console.log(error.message)
  }
}

export const sendMessageInDB = (message, chatId) => async (dispatch) => {
  try {
    await database.ref("messages").child(chatId).push(message)

    dispatch(sendMessage(message, chatId))
    dispatch(updateValue("", chatId))

    if (message.author === "user") {
      setTimeout(() => {
        database
          .ref("messages")
          .child(chatId)
          .push({ author: "bot", message: "Hi, i'm bot, from thunk" })
        dispatch(
          sendMessage(
            { author: "bot", message: "Hi, i'm bot, from thunk" },
            chatId,
          ),
        )
      }, 2000)
    }
  } catch (error) {
    console.log(error)
  }
}
