import { getDatabase, ref, set, child, remove } from "firebase/database"
import debounce from "lodash.debounce"
import { database } from "../../api/firebase"
import { deleteConversationMessagesFromDB } from "../messages"
import {
  updateValue,
  createNewConversationSuccess,
  deleteConversation,
} from "./actions"
import {
  LOADING_DATA_START,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_ERROR,
  LOADING_NEW_CONVERSATION_START,
  LOADING_NEW_CONVERSATION_ERROR,
} from "./types"

export const getConversationsFromDB = () => (dispatch, getState) => {
  const { data } = getState().authStore
  dispatch({ type: LOADING_DATA_START })

  database
    .ref(`conversations/${data.uid}`)
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

export const createNewConversationInDB = (title) => (dispatch, getState) => {
  const { data } = getState().authStore

  dispatch({ type: LOADING_NEW_CONVERSATION_START })
  const id = `chat${getId()}`
  set(child(dbRef, `conversations/${data.uid}/${id}`), { id, title, value: "" })
    .then(() => {
      dispatch(createNewConversationSuccess(id, title))
    })
    .catch((error) => {
      dispatch({
        type: LOADING_NEW_CONVERSATION_ERROR,
        payload: error.message,
      })
    })
}

const inputDebounce = debounce((value, chatId) => {
  database.ref("conversations").child(chatId).update({ value })
}, 500)

export const updateValueInDB = (value, chatId) => async (dispatch) => {
  await inputDebounce(value, chatId)

  dispatch(updateValue(value, chatId))
}

export const deleteConversationFromDB = (id) => (dispatch, getState) => {
  const { data } = getState().authStore

  remove(child(dbRef, `conversations/${data.uid}/${id}`))
    .then(() => {
      dispatch(deleteConversation(id))
      dispatch(deleteConversationMessagesFromDB(id))
    })
    .catch((error) => {
      console.log(error)
    })
}
