import { format } from 'date-fns'
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


export const getMessageFromDB = () => (dispatch, getState) => {
  dispatch({ type: LOADING_DATA_START })
const { data } = getState().authStore
  console.log(data.uid)
  database
    .ref(`messages/${data.uid}`)
    .get()
    .then((snapshot) => {
      const messages = {}
      snapshot.forEach((data) => {
        messages[data.key] = Object.values(data.val())
      })
      dispatch({ type: LOADING_DATA_SUCCESS, payload: messages })
    })
    .catch((error) =>
      dispatch({ type: LOADING_DATA_ERROR, payload: error.message })
    )
}

export const sendMessageInDB = (message, chatId) => async (dispatch, getState) => {
  const { data } = getState().authStore

  dispatch({ type: SEND_MESSAGE_START })
  const date = format(new Date(), 'Pp')
  try {
    await database.ref("messages").child(data.uid).child(chatId).push({...message, date})

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
