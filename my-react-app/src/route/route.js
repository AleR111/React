import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

export const PublicPage = ({ ...params }) => {
  const { data } = useSelector((store) => store.authStore)
  return data ? <Redirect to="/chat" /> : <Route {...params} />
}

export const PrivatePage = ({ ...params }) => {
  const { data } = useSelector((store) => store.authStore)
  return data ? <Route {...params} /> : <Redirect to="sign-in" />
}
