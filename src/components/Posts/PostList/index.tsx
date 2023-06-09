import { useEffect } from 'react'
import { Post } from '..'
import styles from './postList.module.scss'
import { PostTypeTms } from '../../../types/postType'
import { Url } from '../../Main'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadPosts } from '../../../store/post/actions'
import { AppDispatch, AppState } from '../../../store'
import { useSelector } from 'react-redux'
import Pager from '../../Pager'

type Props = {
  tabsList?: Url[]
  page: number
}

const PostList = (props: Props) => {
  const postListTms = useSelector((state: AppState) => state.post.list)
  const myId = useSelector((state: AppState) => state.auth.infoMe?.id)
  const page = props.page as number
  const dispatch = useDispatch<AppDispatch>()
  const param = useLocation()
  const url = param.pathname
  const total = useSelector((state: AppState) => state.post.count)
  const currenPage = page ? +page : 1

  let endpoint = ''
  let filteredPostsList: PostTypeTms[]

  if (url.includes('popular')) {
    endpoint = 'popular'
    filteredPostsList = postListTms.filter(post => post.isPopular === true)
  } else if (url.includes('favorites')) {
    endpoint = 'favorites'
    filteredPostsList = postListTms.filter(post => post.isFavorite === true)

  } else if (url.includes('myposts')) {
    endpoint = 'myposts' 
    filteredPostsList = postListTms.filter(post => post.author === myId)
    console.log(filteredPostsList)
  } else {
    endpoint = 'all'
    filteredPostsList = postListTms
  }

  useEffect(() => {
    let limit = 12
    let offset = (page - 1) * 12
    dispatch(loadPosts(limit, offset))
  }, [page, dispatch])

  const getHeaderPost = (): JSX.Element => {
    const { id, image, text, likes, dislikes, isPopular, title, isFavorite } = { ...filteredPostsList[0] }
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
        isFavorite={isFavorite}
        view='head'
      />
    )
  }

  return (
    <div className={styles.postList}>
      <div className={styles.mainSide}>
        {!(page - 1) && getHeaderPost()}
        <div className={styles.mainPosts}>
          {filteredPostsList.map((post, index) => {
            if (!(page - 1) && (index === 0 || index > 4)) {
              return null
            }
            if (index >= 6) {
              return null
            }
            const { id, image, text, likes, dislikes, isPopular, title, isFavorite } = { ...post }
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
                isFavorite={isFavorite}
                view='main'
              />
            )

          })}
        </div>
      </div>

      <div className={styles.previewSide}>{
        filteredPostsList.map((post, index) => {
          if (!(page - 1) && index <= 4) {
            return null
          }
          if (index < 6) {
            return null
          }
          const { id, image, text, likes, dislikes, isPopular, title, isFavorite } = { ...post }
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
              isFavorite={isFavorite}
              view='sideBar'
            />
          )
        })
      }</div>
      <Pager endpoint={`posts/${endpoint}`} total={total} itemPerPage={12} currentPage={currenPage} />
    </div>
  )
}

export default PostList