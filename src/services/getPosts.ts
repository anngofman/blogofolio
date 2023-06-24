// export const getPosts = async (offset:number, limit:number) => {
// 	const result =  await fetch(`https://mockside.vercel.app/api/posts?offset=${offset}&limit=${limit}`,)
// 	return await result.json()
// }

import { PostTypeTms } from "../types/postType"


export const getPostsTms = async ( limit:number, offset:number,) => {
	const result =  await fetch(`https://studapi.teachmeskills.by/blog/posts/?offset=${offset}&limit=${limit}`,)
	const res = await result.json()
	return res.results as PostTypeTms[]
}