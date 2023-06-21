import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LikeButton from '../../components/buttons/connect/LikeButton'
import DisLikeButton from '../../components/buttons/connect/DisLikeButton'
import Bookmark from '../../components/buttons/connect/BookmarkButton'
import styles from './singlePost.module.scss'
import NavigateBlock from '../../components/nav'
import { PostType } from '../../types/postType'
import { getSinglePost } from '../../services/getSinglePost'
import Wrapper from '../../components/Wrapper'

const SinglePost = () => {
  const { postId } = useParams()
  const [post, setPost] = useState({} as PostType)

  useEffect(() => {
    postId && getSinglePost(postId).then(res => setPost(res))
  }, [postId])
  console.log(post)

  return (
    <Wrapper>
      <div className={styles.singlePost}>
        <NavigateBlock back='Home'title={'post:' + post.id} />
        <div className={styles.title}>
          {post.title}
        </div>
        <div className={styles.img}>
          <img src={post.image} alt='jdk' />
        </div>
        <div className={styles.text}>
          {post.text}
        </div>
        <div className={styles.connect}>
          <div className={styles.likes}>
            <LikeButton onClick={() => { }} like={post.likes} />
            <DisLikeButton onClick={() => { }} dislike={post.dislikes} />
          </div>
          <div className={styles.bookmark}>
            <Bookmark title='Add to favorites'/>
          </div>
        </div>
      </div>
    </Wrapper>

  )
}

export default SinglePost