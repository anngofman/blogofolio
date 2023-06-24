import { RegistrationErrorsType } from "../../api/shared/types"
import { ACTIVATE_FAIL } from "./actions"
import { ActivateActionType, ActivateStateType } from "./types"

const initValue: ActivateStateType = {
  isActivated: false
}

export const activationReducer = (state: ActivateStateType = initValue, action: ActivateActionType): ActivateStateType => {
  switch (action.type) {
    case ACTIVATE_FAIL:
      return {
        isActivated:false,
        errors: action.payload as RegistrationErrorsType
      }
    default:
      return state
  }
}