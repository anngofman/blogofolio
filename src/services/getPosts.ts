
import { MyResponseTypeTms } from "../types/responseType"

export const getPostsTms = (limit: number, offset: number, search?: string) => {
	return fetch(`https://studapi.teachmeskills.by/blog/posts/?offset=${offset}&limit=${limit}${search ? '&search=' + search : ''}`)
				.then(response=>response.json())
				.then((result:MyResponseTypeTms)=>{
					return result
				})
}

