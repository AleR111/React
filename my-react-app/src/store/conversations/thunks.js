import { getDatabase, ref, set, child } from "firebase/database"
import debounce from "lodash.debounce"
import { database } from "../../api/firebase"
import { createNewConversationSuccess, updateValue } from "./actions"
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

const dbRef = ref(getDatabase())

export const createNewConversationInDB = (title) => async (dispatch) => {
  dispatch({ type: LOADING_NEW_CONVERSATION_START })
  const id = `chat${getId()}`
  await set(child(dbRef, `conversations/${id}`), { id, title, value: "" })
    .then(() => {
      dispatch(createNewConversationSuccess(id, title))
    })
    .catch((error) => {
      console.log(121212121212)
      dispatch({
        type: LOADING_NEW_CONVERSATION_ERROR,
        payload: error.message,
      })
    })
}

const inputDebounce = debounce((value, chatId) => {
  database.ref("conversations").child(chatId).update({ value })
}, 500)

export const updateValueInDB = (value, chatId) => (dispatch) => {
  inputDebounce(value, chatId)
  dispatch(updateValue(value, chatId))
}
