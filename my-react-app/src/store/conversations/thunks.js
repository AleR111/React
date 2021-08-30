import { database } from "../../api/firebase"
import { GET_CONVERSATIONS_FROM_DB } from "./types"

export const getConversationsFromDB = () => async (dispatch) => {
  try {
    await database
      .ref("messages")
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
