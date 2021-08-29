import { Link } from "react-router-dom"
import { AuthForm } from "../../components"

const link = <Link to="/sign-in">Already have an account? Sign in</Link>

export const SignUp = () => {
  return (
    <AuthForm header={"Create an account"} button={"sign up"} link={link} />
  )
}
