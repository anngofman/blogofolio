import { RegistrationErrorsType } from "../../api/shared/types"

export type CreateActionType = {
  type: string
  payload?: RegistrationErrorsType
}