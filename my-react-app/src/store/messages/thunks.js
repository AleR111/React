import { database } from "../../api/firebase"
import { GET_MESSAGES_FROM_DB } from "./types"

export const getMessageFromDB = () => async (dispatch) => {
  console.log(123)
  try {
    await database
      .ref("messages")
      .get()
      .then((snapshot) => {
        console.log(snapshot)
        const messages = {}
        snapshot.forEach((data) => {
          messages[data.key] = Object.values(data.val())
            console.log(data)
        })
        console.log(messages)
        dispatch({ type: GET_MESSAGES_FROM_DB, payload: messages })
      })
  } catch (error) {
    console.log(error.message)
  }
}
