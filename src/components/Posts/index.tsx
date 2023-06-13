import React, { useState } from 'react'
import styles from './Post.module.scss'
import LikeButton from '../buttons/connect/LikeButton'
import DisLikeButton from '../buttons/connect/DisLikeButton'
import Bookmark from '../buttons/connect/BookmarkButton'
import MenuMoreButton from '../buttons/connect/MenuMoreButton'

type Props = {
  id: string
  title: string
  text: string
  image?: string
  likes: number
  dislikes: number
  isPopular: false
  view?: 'head' | 'main' | 'sideBar'
  className?: string
}

export const Post = (props: Props) => {

  let date = new Date()

  const [like, setLike] = useState(props.likes)
  const [dislikes, setDislikes] = useState(props.dislikes)


  const likeBtnOnClick = () => {
    setLike((like) => like === 0 ? like = like + 1 : like = like - 1)
    setDislikes(dislikes => dislikes === 0 ? dislikes = 0 : dislikes -= 1)
  }

  const disLikeBtnOnClick = () => {
    setDislikes(dislikes => dislikes === 0 ? dislikes += 1 : dislikes -= 1)
    setLike((like) => like === 0 ? like = 0 : like -= 1)
  }

  // const url = 'https://on-desktop.com/wps/Animals___Cats_Red_Cat_with_open_mouth_044663_.jpg'

  const wrapClass = `${styles.post} ${(props.view === 'head') ? styles.head : ((props.view === 'main') ? styles.main : styles.sideBar)}`
  return (
    <div className={`${wrapClass} ${props.className}}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>{date.toDateString()}</p>
          <div className={styles.title}>
            {props.title}
          </div>
          <div className={styles.description}>
            {props.text}
          </div>
        </div>
        <div className={styles.postImg}>
          <img src={props.image} alt={'img'}>
          </img>
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.likes}>
          <LikeButton onClick={likeBtnOnClick} like={like} />
          <DisLikeButton onClick={disLikeBtnOnClick} dislike={dislikes} />
        </div>
        <div>
          <Bookmark />
          <MenuMoreButton onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

