import { RegistrationErrorsType } from "../../api/shared/types"

export type Tokens ={
  access:string
  refresh:string
}

export type AuthUserStateType = {
  isAuthenticated: boolean
  errors?: RegistrationErrorsType 
  tokens?: Tokens
}

export type AuthActionType = {
  type: string
  payload?: Tokens | RegistrationErrorsType
}