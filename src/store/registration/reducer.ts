import { RegistrationActionName } from "./actions";
import { RegisterActionType, RegisterUserStateType } from "./types";
import {RegistrationErrorsType, UserType} from '../../api/shared/types'

const initValue: RegisterUserStateType = {
  isRegistered: false
}

export const registrationReducer = (state: RegisterUserStateType = initValue, action: RegisterActionType): RegisterUserStateType => {
  switch (action.type) {
    case RegistrationActionName.REGISTRATION_SUCCESS:
      return {
        isRegistered:true,
        user:action.payload as UserType
      }
    case RegistrationActionName.REGISTRATION_FAIL:
      return {
        isRegistered:false,
        errors: action.payload as RegistrationErrorsType 
      }
    default:
      return state
  }
}