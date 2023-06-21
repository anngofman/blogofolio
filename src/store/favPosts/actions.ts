import { PostType } from '../../types/postType'
import { FavPostsActionType } from './types'

export const setAsFavoriteAction = (post: PostType): FavPostsActionType => {
  return {
    type: 'SET_FAV_POST',
    payload: post
  }
}