import { loadingError, loadingStart, loadingSuccess } from "./actions"

const PUBLIC_GISTS_URL = "https://api.github.com/gists/public"
const PUBLIC_GISTS_USER_URL = "https://api.github.com/users"

const loadData = async (dispatch, url) => {
  dispatch(loadingStart())
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    dispatch(loadingSuccess(data))
  } catch (error) {
    dispatch(loadingError(error.message))
  }
}

export const getPublicGists =
  (page = 1) =>
  async (dispatch) => {
    const url = `${PUBLIC_GISTS_URL}?page=${page}`
    await loadData(dispatch, url)
  }

export const searchPublicGistsByLogin = (login) => async (dispatch) => {
  const url = `${PUBLIC_GISTS_USER_URL}/${login}`
  await loadData(dispatch, url)
}
