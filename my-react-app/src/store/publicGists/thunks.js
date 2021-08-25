import { loadingError, loadingStart, loadingSuccess } from "./actions"

const PUBLIC_GISTS_URL = "https://api.github.com/gists/public"

export const getPublicGists =
  (page = 1) =>
  async (dispatch) => {
    dispatch(loadingStart())
    try {
      const response = await fetch(`${PUBLIC_GISTS_URL}?page=${page}`)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      dispatch(loadingSuccess(data))
    } catch (error) {
      console.log(error.message)
      dispatch(loadingError(error.message))
    }
  }
