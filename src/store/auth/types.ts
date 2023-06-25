import { RegistrationErrorsType } from "../../api/shared/types"

export type Tokens = {
  access: string
  refresh: string
}

export type InfoMe = {
  username: string,
  id: number,
  email: string
}

export type AuthUserStateType = {
  isAuthenticated: boolean
  errors?: RegistrationErrorsType
  tokens?: Tokens
  infoMe?: InfoMe
}

export type AuthActionType = {
  type: string
  payload?: Tokens | RegistrationErrorsType | InfoMe
}