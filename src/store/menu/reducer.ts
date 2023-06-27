import { MenuActionType, MenuStateType } from './types';

const initialValue: MenuStateType = {
  menu: 'close'
}
export const menuReducer = (state: MenuStateType = initialValue, action: MenuActionType) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        menu: 'open'
      }
    case 'CLOSE_MENU':
      return {
        menu: 'close'
      }
    default:
      return state
  }
}