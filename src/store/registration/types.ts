import { RegistrationErrorsType, UserType } from "../../api/shared/types"


export type RegisterUserStateType = {
  isRegistered: boolean
  errors?: RegistrationErrorsType 
  user?: UserType
}

export type RegisterActionType = {
  type: string
  payload?: UserType | RegistrationErrorsType
}