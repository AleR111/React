import { UPDATE_VALUE } from "./types"

export const updateValue = (value, chatId) => ({
  type: UPDATE_VALUE,
  payload: { value, chatId },
})
