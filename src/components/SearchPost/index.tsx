import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import styles from './searchPost.module.scss'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadSearchPosts } from '../../store/search/actions'
import LikeButton from '../buttons/connect/LikeButton'
import DisLikeButton from '../buttons/connect/DisLikeButton'
import Bookmark from '../buttons/connect/BookmarkButton'
import MenuMoreButton from '../buttons/connect/MenuMoreButton'
import { dislikePostAction, likePostAction, setFavPostAction } from '../../store/post/actions'

const SearchPost = () => {
  const { page } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const posts = useSelector((state: AppState) => state.search.list)

  useEffect(() => {
    if (page) {
      dispatch(loadSearchPosts(6, (+page - 1) * 6))
    }
  }, [page, dispatch])

  let date = new Date()

  return (
    <>
      {
        posts.map(post => (
          <div key={post.id} className={styles.postSearch}>
            <div className={styles.content}>
              <img className={styles.img} src={post.image} alt='img' />
              <div className={styles.text}>
                <p>{date.toDateString()}</p>
                <h2> {post.title}</h2>
              </div>
            </div>
            <div className={styles.connect}>
              <div className={styles.likes}>
                <LikeButton />
                <DisLikeButton />
              </div>
              <div className={styles.options}>
                <Bookmark />
                <MenuMoreButton onClick={() => { }} />
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default SearchPost