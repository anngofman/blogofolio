import { MenuActionType } from "./types"

export const OpenMenuAction = (): MenuActionType => {
  return {
    type: 'OPEN_MENU'
  }
}

export const CloseMenuAction = (): MenuActionType => {
  return {
    type: 'CLOSE_MENU'
  }
}