import React, { useState } from 'react'
import styles from './Post.module.scss'
import LikeButton from '../buttons/connect/LikeButton'
import DisLikeButton from '../buttons/connect/DisLikeButton'
import Bookmark from '../buttons/connect/BookmarkButton'
import MenuMoreButton from '../buttons/connect/MenuMoreButton'

type Props = {
  // id: number
  // image: string
  // text: string
  // date: string
  // title: string
  // likes: number
  // dislikes: number
className?:string
  view: 'head' | 'main' | 'sideBar'
}

export const Post = (props: Props) => {

  let date = new Date()

  const [like, setLike] = useState(0)
  const [dislikes, setDislikes] = useState(0)


  const likeBtnOnClick = () => {
    setLike((like) => like === 0 ? like = like + 1 : like = like - 1)
    setDislikes(dislikes => dislikes === 0 ? dislikes = 0 : dislikes -= 1)
  }

  const disLikeBtnOnClick = () => {
    setDislikes(dislikes => dislikes === 0 ? dislikes += 1 : dislikes -= 1)
    setLike((like) => like === 0 ? like = 0 : like -= 1)
  }

  const url = 'https://on-desktop.com/wps/Animals___Cats_Red_Cat_with_open_mouth_044663_.jpg'

  const wrapClass = `${styles.post} ${(props.view === 'head') ? styles.head : ((props.view === 'main') ? styles.main : styles.sideBar)}`
  return (
    <div className={`${wrapClass} ${props.className}}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>{date.toDateString()}</p>
          <div className={styles.title}>
            Astronauts prep for new solar arrays on nearly seven-hour spacewalk
          </div>
          <div className={styles.description}>
            Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.
          </div>
        </div>
        <div className={styles.postImg}>
          <img src={url} alt={'kot'}>
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

