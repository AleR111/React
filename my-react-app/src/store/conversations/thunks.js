import debounce from "lodash.debounce"
import { database } from "../../api/firebase"
import { createNewConversation, updateValue } from "./actions"
import {
  LOADING_DATA_START,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_ERROR,
  LOADING_NEW_CONVERSATION_START,
  LOADING_NEW_CONVERSATION_ERROR,
} from "./types"

export const getConversationsFromDB = () => (dispatch) => {
  dispatch({ type: LOADING_DATA_START })

  database
    .ref("conversations")
    .get()
    .then((snapshot) => {
      const conversations = []
      snapshot.forEach((data) => {
        conversations.push(data.val())
      })
      dispatch({ type: LOADING_DATA_SUCCESS, payload: conversations })
    })
    .catch((error) =>
      dispatch({ type: LOADING_DATA_ERROR, payload: error.message }),
    )
}

const getId = () => {
  const data = new Date()
  return data.getTime()
}

export const createNewConversationInDB = (title) => async (dispatch) => {
  dispatch({ type: LOADING_NEW_CONVERSATION_START })
  const id = `chat${getId()}`
  await database
    .ref("conversations")
    .child(id)
    .set({ id, title, value: "" }, (error) => {
      console.log(error)
      if (error) {
        console.log(12312321323)
        dispatch({
          type: LOADING_NEW_CONVERSATION_ERROR,
          payload: error.message,
        })
      }
    }) ////////recode
  dispatch(createNewConversation(id, title))
}

const inputDebounce = debounce((value, chatId) => {
  database.ref("conversations").child(chatId).update({ value })
}, 500)

export const updateValueInDB = (value, chatId) => (dispatch) => {
  inputDebounce(value, chatId)
  dispatch(updateValue(value, chatId))
}
