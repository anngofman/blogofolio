import { AppThunk } from ".."
import { crearePost } from "../../api/authService"
import { RegistrationErrorsType } from "../../api/shared/types"

export const CreatePostName = {
  CREATE_SUCCESS: 'CREATE_SUCCESS',
  CREATE_FAIL: 'CREATE_FAIL'
} as const

const createSuccess = () => {
  return {
    type: CreatePostName.CREATE_SUCCESS,
  }
}

const createFail = (errors: RegistrationErrorsType | string) => {
  return {
    type: CreatePostName.CREATE_FAIL,
    payload: errors
  }
}

export const CreatePostAction = (title: string, text: string, description: string, lesson_num: number, image: File | string, cb?: () => void): AppThunk => {
  return (dispatch, getState) => {
    const token = getState().auth.tokens?.access as string
    crearePost(title, text, description, lesson_num, image, token)
      .then(response => {
        if (!response) {
          return dispatch(createFail('Неизвестная ошибка'))
        } else if (!response.ok) {
          console.log(response.data)
          console.log(response.ok)
          console.log(response.status)
          return dispatch(createFail(response.data))
          
        }
        dispatch(createSuccess())
        if (cb) {
          cb()
        }
      })
  }
}


