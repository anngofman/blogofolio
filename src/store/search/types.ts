import { MyResponseTypeTms } from '../../types/responseType';
import { PostTypeTms } from './../../types/postType';

export type SearchStateType = {
	search:string
	count:number
	list: PostTypeTms[]
}

export type SearchActionType = {
	type: string
	payload?: MyResponseTypeTms | string 
}