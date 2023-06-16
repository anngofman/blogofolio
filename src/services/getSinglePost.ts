export const getSinglePost = async (postId: string) => {
  const result = await fetch(`https://mockside.vercel.app/api/posts/` + postId,)
  return await result.json()
}

