import React, { useEffect, useState } from 'react'
import { MyResponseType, getPosts } from '../../../services/getPost'
import { Post } from '..'
import styles from './postList.module.scss'

type PostType = {
  id: string
  title: string
  text: string
  image?: string
  likes: number
  dislikes: number
  isPopular: false
  view?: 'head' | 'main' | 'sideBar'
}

const PostList = () => {
  let [postsList, setPostList] = useState([] as PostType[])
  const [page] = useState(0)
  console.log(postsList)

  useEffect(() => {
    let limit
    if (!page) limit = 10
    else limit = 12

    getPosts(page * 12 , limit).then((posts: MyResponseType<PostType>) => {
      setPostList(posts.items)
    })
  }, [page])

  const getHeaderPost = (): JSX.Element => {
    const { id, image, text, likes, dislikes, isPopular, title } = { ...postsList[0] }

    return (
      <div className={styles.headerPost}>
        <Post
          id={id}
          title={title}
          text={text}
          image={image}
          likes={likes}
          dislikes={dislikes}
          isPopular={isPopular}
          view='head'
        />
      </div>
    )
  }

  return (
    <div className={styles.postList}>
      <div className={styles.mainSide}>
        {!page && getHeaderPost()}
        <div className={styles.mainPosts}>
          {postsList.map((post, index) => {
            if (!page && (index === 0 || index > 4)) {
              return null
            }
            const { id, image, text, likes, dislikes, isPopular, title } = { ...post }
            return (
              <Post
                id={id}
                title={title}
                text={text}
                image={image}
                likes={likes}
                dislikes={dislikes}
                isPopular={isPopular}
                view='main'
              />
            )
          })}
        </div>
      </div>

      <div className={styles.previewSide}>{
        postsList.map((post, index) => {
          if (!page && index < 4) {
            return null
          }
          const { id, image, text, likes, dislikes, isPopular, title } = { ...post }
          return (
            <Post
              id={id}
              title={title}
              text={text}
              image={image}
              likes={likes}
              dislikes={dislikes}
              isPopular={isPopular}
              view='sideBar'
            />
          )
        })
      }</div>
    </div>
  )
}

export default PostList