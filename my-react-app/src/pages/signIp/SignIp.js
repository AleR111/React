import { Link } from "react-router-dom"
import { AuthForm } from "../../components"

const link = <Link to="/sign-up">No account? Create one</Link>

export const SignIp = () => {
  return (
    <AuthForm header={"Sign in with email"} button={"sign in"} link={link} />
  )
}
