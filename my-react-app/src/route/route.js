import { Redirect, Route } from "react-router-dom"

export const PublicPage = ({ auth, ...params }) => {
  console.log(auth)
  return auth ? <Redirect to="/chat" /> : <Route {...params} />
}

export const PrivatePage = ({ auth, ...params }) => {
  console.log(auth)
  return auth ? <Route {...params} /> : <Redirect to="sign-in" />
}
