import { FavPostsActionType, FavPostsStateType } from "./types"

const initialValue: FavPostsStateType = {
  list: []
}

export const FavPostReducer = (state: FavPostsStateType = initialValue, action: FavPostsActionType): FavPostsStateType => {
  switch (action.type) {
    case 'SET_FAV_POST':
      return {
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}