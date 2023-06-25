import { AuthActionType, AuthUserStateType, InfoMe, Tokens } from "./types";
import { RegistrationErrorsType } from '../../api/shared/types'
import { AuthActionName } from "./actions";

const initValue: AuthUserStateType = {
  isAuthenticated: false,
  tokens: {
    access: '',
    refresh: ''
  },
  infoMe: {
    username: '',
    id: 0,
    email: ''
  }
}

export const authReducer = (state: AuthUserStateType = initValue, action: AuthActionType): AuthUserStateType => {
  switch (action.type) {
    case AuthActionName.AUTH_SUCCESS:
      return {
        isAuthenticated: true,
        tokens: action.payload as Tokens
      }
    case AuthActionName.AUTH_FAIL:
      return {
        isAuthenticated: false,
        errors: action.payload as RegistrationErrorsType
      }
      case  AuthActionName.AUTH_ME:
        return{
          ...state,
          infoMe: action.payload as InfoMe
        }
    default:
      return state
  }
}