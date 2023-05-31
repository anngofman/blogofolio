import { ReactNode, createContext, useContext, useState } from "react";

type AuthContextType = {
  isAuthorized: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [auth, setAuth] = useState(true)

  const login = () => setAuth(true)
  const logout = () => setAuth(false)

  const providerValue: AuthContextType = {
    isAuthorized: auth,
    login: login,
    logout: logout
  }

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}