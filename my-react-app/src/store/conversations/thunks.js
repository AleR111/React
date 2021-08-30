import debounce from "lodash.debounce"
import { database } from "../../api/firebase"
import { createNewConversation, updateValue } from "./actions"
import { GET_CONVERSATIONS_FROM_DB } from "./types"

export const getConversationsFromDB = () => (dispatch) => {
  try {
    database
      .ref("conversations")
      .get()
      .then((snapshot) => {
        const conversations = []
        snapshot.forEach((data) => {
          conversations.push(data.val())
        })
        dispatch({ type: GET_CONVERSATIONS_FROM_DB, payload: conversations })
      })
  } catch (error) {
    console.log(error.message)
  }
}

const getId = () => {
  const data = new Date()
  return data.getTime()
}

export const createNewConversationInDB = (title) => async (dispatch) => {
  const id = `chat${getId()}`
  await database.ref("conversations").child(id).set({ id, title, value: "" })
  dispatch(createNewConversation(id, title))
}

const inputDebounce = debounce((value, chatId) => {
  database.ref("conversations").child(chatId).update({ value })
}, 500)

export const updateValueInDB = (value, chatId) => (dispatch) => {
  inputDebounce(value, chatId)
  dispatch(updateValue(value, chatId))
}
