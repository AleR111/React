import { database } from "../../api/firebase"
import { updateValueInDB} from "../conversations"
import { sendMessageSuccess } from "./actions"
import {
  LOADING_DATA_SUCCESS,
  LOADING_DATA_START,
  LOADING_DATA_ERROR,
  SEND_MESSAGE_START,
  SEND_MESSAGE_ERROR,
} from "./types"

export const getMessageFromDB = () => (dispatch) => {
  dispatch({ type: LOADING_DATA_START })

  database
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
  const date = new Date().toString()
  try {
    await database.ref("messages").child(chatId).push({...message, date})

    dispatch(sendMessageSuccess({...message, date}, chatId))
    if (message.author === "user") dispatch(updateValueInDB('', chatId))

    if (message.author === "user") {
      setTimeout( () => {

        dispatch(sendMessageInDB(
          { author: "bot", message: "Hi, i'm bot, from thunk" },
          chatId,
        ))
      }, 2000)
    }
  } catch (error) {
    dispatch({ type: SEND_MESSAGE_ERROR, payload: error.message })
  }
}
