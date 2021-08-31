import { database } from "../../api/firebase"
import { updateValue } from "../conversations"
import { sendMessage } from "./actions"
import {
  LOADING_DATA_SUCCESS,
  LOADING_DATA_START,
  LOADING_DATA_ERROR,
  SEND_MESSAGE_START,
  SEND_MESSAGE_ERROR,
} from "./types"

export const getMessageFromDB = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA_START })

  await database
    .ref("messages")
    .get()
    .then((snapshot) => {
      const messages = {}
      snapshot.forEach((data) => {
        messages[data.key] = Object.values(data.val())
      })
      dispatch({ type: LOADING_DATA_SUCCESS, payload: messages })
    })
    .catch((error) =>
      dispatch({ type: LOADING_DATA_ERROR, payload: error.message }),
    )
}

export const sendMessageInDB = (message, chatId) => async (dispatch) => {
  dispatch({ type: SEND_MESSAGE_START })
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
    dispatch({ type: SEND_MESSAGE_ERROR, payload: error.message })
  }
}
