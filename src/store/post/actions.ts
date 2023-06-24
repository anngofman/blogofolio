import { AppThunk } from ".."
import { getPostsTms } from "../../services/getPosts"
import { MyResponseTypeTms } from "../../types/responseType"

export const setPosts = (posts: MyResponseTypeTms) => {
	return {
		type: 'LOAD_POSTS',
		payload: posts
	}
}

export const loadPosts = (limit:number, offset:number): AppThunk => {
	return async (dispatch) => {
		const posts = await getPostsTms(limit, offset)
		dispatch(setPosts(posts as MyResponseTypeTms))
	}
}

export const likePostAction = (id: number) => {
	return {
		type: 'LIKE_POST',
		payload: id
	}
}

export const dislikePostAction = (id: number) => {
	return {
		type: 'DISLIKE_POST',
		payload: id
	}
}

export const setFavPostAction = (id: number) => {
	return {
		type: 'SET_FAVORITE_POST',
		payload: id
	}
}
