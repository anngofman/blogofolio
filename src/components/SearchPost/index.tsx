import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import styles from './searchPost.module.scss'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadSearchPosts } from '../../store/search/actions'

const SearchPost = () => {
  const { page } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const posts = useSelector((state: AppState) => state.search.list)

  useEffect(() => {
    if (page) {
      dispatch(loadSearchPosts(6, (+page - 1) * 6))
    }
  }, [page, dispatch])
  return (
    <>
      {
        posts.map(post => (
          <div key={post.id} className={styles.postSearch}>
            {post.id}-{post.title}
            <img className={styles.img} src={post.image} alt='img' />
          </div>
        ))
      }
    </>
  )
}

export default SearchPost