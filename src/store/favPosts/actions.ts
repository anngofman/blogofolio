
import { FavPostsActionType } from './types'

export const setAsFavoriteAction = (postId: number): FavPostsActionType => {
  return {
    type: 'SET_FAV_POST',
    payload: postId
  }
}