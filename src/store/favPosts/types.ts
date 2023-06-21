import { PostType } from './../../types/postType';
export type FavPostsStateType = {
  list: PostType[]
}

export type FavPostsActionType = {
  type: string
  payload: PostType
}