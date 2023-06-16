import { useEffect, useState } from 'react'
import { getPosts, getPostsTms } from '../../../services/getPosts'
import { Post } from '..'
import styles from './postList.module.scss'
import { PostType, PostTypeTms } from '../../../types/postType'
import { MyResponseType, MyResponseTypeTms } from '../../../types/responseType'
import { Url } from '../../Main'
import { useLocation } from 'react-router-dom'

type Props = {
  tabsList?: Url[]
}

const PostList = (props: Props) => {
  let [postsList, setPostList] = useState([] as PostType[])
  let [postListTms, setPostListTms] = useState([] as PostTypeTms[])
  const [page] = useState(0)
  console.log(!page)
  const param = useLocation()
  const url = param.pathname
  const str = url.search('popular')
  let filteredPostsList: PostType[]

  if (str === -1) {
    filteredPostsList = postsList
  } else {
    filteredPostsList = postsList.filter(post => post.isPopular === true)
  }

  useEffect(() => {
    let limit
    if (!page) limit = 10
    else limit = 12

    getPosts(page * 12, limit).then((posts: MyResponseType<PostType>) => {
      setPostList(posts.items)
    })

    getPostsTms(page*12,limit).then((post:MyResponseTypeTms<PostTypeTms>)=>{
      setPostListTms(post.results)
    })
  }, [page])





  const getHeaderPost = (): JSX.Element => {
    const { title, text} = {...postListTms[0]}
    const {id,  image,  likes, dislikes, isPopular } = { ...filteredPostsList[0] }

    return (
      <Post
        className={styles.headerPost}
        key={id}
        id={id}
        title={title}
        text={text}
        image={image}
        likes={likes}
        dislikes={dislikes}
        isPopular={isPopular}
        view='head'
      />
    )
  }

  return (
    <div className={styles.postList}>
      <div className={styles.mainSide}>
        {!page && getHeaderPost()}
        <div className={styles.mainPosts}>
          {filteredPostsList.map((post, index) => {
            if (!page && (index === 0 || index > 4)) {
              return null
            }
            const { id, image, text, likes, dislikes, isPopular, title } = { ...post }
            return (
              <Post
                className={styles[`main${index + 1}`]}
                key={id}
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
        filteredPostsList.map((post, index) => {
          if (!page && index < 4) {
            return null
          }
          const { id, image, text, likes, dislikes, isPopular, title } = { ...post }
          return (
            <Post
              className={styles[`side${index + 1}`]}
              key={id}
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