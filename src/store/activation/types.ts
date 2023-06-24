import { RegistrationErrorsType } from "../../api/shared/types"

export type ActivateStateType = {
  isActivated?: boolean
  errors?: RegistrationErrorsType | string
}

export type ActivateActionType = {
  type: string
  payload?: RegistrationErrorsType
}