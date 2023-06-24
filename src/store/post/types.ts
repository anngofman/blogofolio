import { PostTypeTms } from './../../types/postType';

export type PostsStateType = {
	list: PostTypeTms[]
}

export type PostsActionType = {
	type: string
	payload: PostTypeTms[] | number
}