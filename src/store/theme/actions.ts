import { ThemeActionType } from './types';

export const setLightThemeAction = (): ThemeActionType => {
  return {
    type: 'SET_LIGHT_THEME'
  }
}

export const setDarkThemeAction = (): ThemeActionType => {
  return {
    type: 'SET_DARK_THEME'
  }
}