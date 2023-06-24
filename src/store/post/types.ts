import { MyResponseTypeTms } from '../../types/responseType';
import { PostTypeTms } from './../../types/postType';

export type PostsStateType = {
	count:number
	list: PostTypeTms[]
}

export type PostsActionType = {
	type: string
	payload: MyResponseTypeTms | number
}