import { AppThunk } from ".."
import { getPostsTms } from "../../services/getPosts"
import { MyResponseTypeTms } from "../../types/responseType"
import { SearchActionType } from "./types"

export const clearSearchAction = () :SearchActionType => {
	return{
		type:'CLEAR_SEARCH'
	}
}

const setPosts = (posts: MyResponseTypeTms): SearchActionType => {
	return {
		type: 'LOAD_SEARCH_POSTS',
		payload: posts
	}
}

export const loadSearchPosts = (limit:number, offset:number): AppThunk => {
	return async (dispatch, getState) => {
		const search = getState().search.search
		const posts = await getPostsTms(limit, offset, search)
		dispatch(setPosts(posts))
	}
}

export const setSearchValueAction = (search: string,limit:number, offset:number): AppThunk => {
	return (dispatch) => {
		dispatch({
			type: 'SET_SEARCH_VALUE',
			payload: search
		})
		if (search) {
			dispatch(loadSearchPosts(limit, offset))
		} else {
			dispatch(clearSearchAction())
		}
	}
}