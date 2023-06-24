import { AppThunk } from "..";
import { activation } from "../../api/authService";
import { RegistrationErrorsType } from "../../api/shared/types";

export const ACTIVATE_FAIL = 'ACTIVATE_FAIL'

const activationFail = (errors: RegistrationErrorsType | string) => {
  return {
    type: ACTIVATE_FAIL,
    payload: errors
  }
}

export const activationAction = (uid: string, token: string, cb?: () => void): AppThunk => {
  return (dispatch) => {
    activation(uid, token)
      .then(response => {
        if (!response.ok) {
          return dispatch(activationFail(response.data))
        }

        if (cb) {
          cb()
        }
      })
  }
}