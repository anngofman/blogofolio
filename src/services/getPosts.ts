export const getPosts = async (offset:number, limit:number) => {
	const result =  await fetch(`https://mockside.vercel.app/api/posts?offset=${offset}&limit=${limit}`,)
	return await result.json()
}


export const getPostsTms = async (offset:number, limit:number) => {
	const result =  await fetch(`https://studapi.teachmeskills.by/blog/posts/?offset=${offset}&limit=${limit}`,)
	return await result.json()
}