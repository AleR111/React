import { loadingError, loadingStart, loadingSuccess } from "./actions"

const PUBLIC_GISTS_URL = "https://api.github.com/gists/public"
const PUBLIC_GISTS_USER_URL = "https://api.github.com/users"

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
        console.log(data)
      dispatch(loadingSuccess(data))
    } catch (error) {
      console.log(error.message)
      dispatch(loadingError(error.message))
    }
  }

export const searchPublicGistsByLogin =
    (login) =>
        async (dispatch) => {
            dispatch(loadingStart())
            try {
                const response = await fetch(`${PUBLIC_GISTS_USER_URL}/${login}`)
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }

                const data = await response.json()
                console.log(data)
                dispatch(loadingSuccess(data))
            } catch (error) {
                console.log(error.message)
                dispatch(loadingError(error.message))
            }
        }
