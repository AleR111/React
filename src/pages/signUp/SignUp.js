import { Link } from "react-router-dom"
import {firebaseApp} from "../../api/firebase";
import { AuthForm } from "../../components"


const link = <Link to="/sign-in">Already have an account? Sign in</Link>

const onSubmit = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
}

export const SignUp = () => {
  return (
    <AuthForm header={"Create an account"} button={"sign up"} link={link} onSubmit={onSubmit}/>
  )
}
