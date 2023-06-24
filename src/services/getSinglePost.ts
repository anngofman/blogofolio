export const getSinglePost = async (postId: string) => {
  const result = await fetch(`https://studapi.teachmeskills.by/blog/posts/` + postId,)
  return await result.json()
}

