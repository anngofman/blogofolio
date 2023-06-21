import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "./AuthProvider"

type Props = {
  children: JSX.Element
}

const RequireAuth = ({ children }: Props) => {
  //проверка на авторизацию
  const { isAuthorized } = useAuthContext()
  const location = useLocation()

  if (!isAuthorized) {
    return <Navigate to='/signIn' state={{
      pathname: location.pathname
    }} />
  }
  return children
}

export default RequireAuth