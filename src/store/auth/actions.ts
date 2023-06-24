import { AppThunk } from ".."
import { login } from "../../api/authService"
import { RegistrationErrorsType } from "../../api/shared/types"
import { Tokens } from "./types"


export const AuthActionName = {
  AUTH_SUCCESS: 'AUTH_SUCCESS',
    AUTH_FAIL: 'AUTH_FAIL'
} as const

const authSuccess = (tokens: Tokens) => {
  return {
    type: AuthActionName.AUTH_SUCCESS,
    payload: tokens
  }
}

const authFail = (errors: RegistrationErrorsType | string) => {
  return {
    type: AuthActionName.AUTH_FAIL,
    payload: errors
  }
}

export const LoginAction = (email: string, password: string, cb?:()=>void): AppThunk => {
  return (dispatch) => {
    login(email, password)
      .then(response => {
        if (!response) {
          return dispatch(authFail('Неизвестная ошибка'))
        } else if (!response.ok) {
          return dispatch(authFail(response.data))
        }

        dispatch(authSuccess(response.data))
      if (cb) {
        cb()
      }

      // dispatch(getMeUserDataAction())
      })
  }
}