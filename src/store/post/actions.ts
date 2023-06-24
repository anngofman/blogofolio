import { AppThunk } from ".."
import { PostTypeTms } from '../../types/postType'
import { getPostsTms } from "../../services/getPosts"

export const setPosts = (posts: PostTypeTms[]) => {
	return {
		type: 'LOAD_POSTS',
		payload: posts
	}
}

export const loadPosts = (limit:number, offset:number): AppThunk => {
	return async (dispatch) => {
		const posts = await getPostsTms(limit, offset)
		dispatch(setPosts(posts as PostTypeTms[]))
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
