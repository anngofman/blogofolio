import React, { useCallback, useState } from 'react'
import styles from './Post.module.scss'
import LikeButton from '../buttons/connect/likeButton'
import DisLikeButton from '../buttons/connect/disLikeButton'
import Bookmark from '../buttons/connect/bookmarkButton'
import MenuMoreButton from '../buttons/connect/menuMoreButton'

type Props = {
  view: 'head' | 'main' | 'sideBar'
}

export const Post = (props: Props) => {

  let date = new Date()

  const [like, setLike] = useState('')
  const [dislikes, setDislikes] = useState('')
  const [bookmark, setBookmark] = useState(true)

  const likeBtnOnClick = () => {
    setLike((like) => like ? like = '' : like = '1')
    setDislikes(dislikes => dislikes ? dislikes = '' : dislikes = '1')
  }

  const BookmarkOnClick = useCallback(() => {
    setBookmark(bookmark => bookmark = false)
  }, [])
  const url = 'https://on-desktop.com/wps/Animals___Cats_Red_Cat_with_open_mouth_044663_.jpg'

  const wrapClass = `${styles.post}
                    ${props.view ? styles.head:''}`
  return (
    <div className={wrapClass}>
      <div className={styles.post_content}>
        <div className={styles.text}>
          <p>{date.toDateString()}</p>
          <div className={styles.title}>
            Astronauts prep for new solar arrays on nearly seven-hour spacewalk
          </div>
          <div className={styles.description}>
            Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.
          </div>
        </div>
        <img src={url} alt={'kot'}>
        </img>
      </div>
      <div className={styles.post_connect}>
        <div className={styles.likes}>
          <LikeButton onClick={likeBtnOnClick} like={like} />
          <DisLikeButton onClick={likeBtnOnClick} like={dislikes} />
        </div>
        <div>
          <Bookmark onClick={BookmarkOnClick} onChange={bookmark} />
          <MenuMoreButton onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

