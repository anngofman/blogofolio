export const getPosts = async (offset:number, limit:number) => {
	const result =  await fetch(`https://mockside.vercel.app/api/posts?offset=${offset}&limit=${limit}`,)
	return await result.json()
}

export type MyResponseType<T> = {
	items:T[]
}