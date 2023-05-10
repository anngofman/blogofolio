export const getPosts = async (limit: number, offset: number) => {
	const result =  await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}`,)
	return  await result.json()
}