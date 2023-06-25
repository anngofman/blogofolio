import { AppThunk } from ".."
import { authMe, login } from "../../api/authService"
import { RegistrationErrorsType } from "../../api/shared/types"
import { InfoMe, Tokens } from "./types"


export const AuthActionName = {
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAIL: 'AUTH_FAIL',
  AUTH_ME: 'AUTH_ME'
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

const authMeAction = (infoMe: InfoMe) => {
  return {
    type: AuthActionName.AUTH_ME,
    payload: infoMe
  }
}

const authMeinfoAction = (): AppThunk => {
  return (dispatch, getState) => {
    const token = getState().auth.tokens?.access as string
    authMe(token)
      .then(response => {
        if (!response) {
          return dispatch(authFail('Неизвестная ошибка'))
        } else if (!response.ok) {
          return dispatch(authFail(response.data))
        }
        console.log(response.data)
        dispatch(authMeAction(response.data))
      })
  }
}

export const LoginAction = (email: string, password: string, cb?: () => void): AppThunk => {
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

        dispatch(authMeinfoAction())
      })
  }
}