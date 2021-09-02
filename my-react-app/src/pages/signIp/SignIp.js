import { Link } from "react-router-dom"
import { firebaseApp } from "../../api/firebase"
import { AuthForm } from "../../components"

const link = <Link to="/sign-up">No account? Create one</Link>

const onSubmit = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export const SignIp = () => {
  return (
    <AuthForm
      header={"Sign in with email"}
      button={"sign in"}
      link={link}
      onSubmit={onSubmit}
    />
  )
}
