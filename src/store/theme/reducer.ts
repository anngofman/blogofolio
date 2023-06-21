import { ThemeActionType, ThemeStateType } from "./types";

const initialValue: ThemeStateType = {
  theme: 'light'
}
export const themeReducer = (state: ThemeStateType = initialValue, action: ThemeActionType) => {
  switch (action.type) {
    case 'SET_LIGHT_THEME':
      return {
        ...state,
        theme: 'light'
      }
    case 'SET_DARK_THEME':
      return {
        theme: 'dark'
      }
    default:
      return state
  }
}