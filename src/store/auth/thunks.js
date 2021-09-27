import { firebaseApp } from "../../api/firebase"
import { loadingError, loadingStart, loadingSuccess } from "./actions"

export const requestAuth = () => async (dispatch) => {
  dispatch(loadingStart())
  try {
    await firebaseApp.auth().onAuthStateChanged((user) => {
      const userAuth = user ? user : null
      dispatch(loadingSuccess(userAuth))
    })
  } catch (error) {
    dispatch(loadingError(error.message))
  } ///// не знаю как тут правильно ошибку отловить
}
