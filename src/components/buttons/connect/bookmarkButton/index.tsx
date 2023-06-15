import styles from './Bookmark.module.scss'
import BookmarkIcon from '../../../../Icon/Bookmark'
import { useCallback, useState } from 'react'




const Bookmark = () => {

  const [bookmark, setBookmark] = useState('none')

  const BookmarkOnClick = useCallback(() => {
    setBookmark(bookmark => bookmark==='none' ? bookmark = 'black' : bookmark = 'none')
  }, [])

  return (
    <button onClick={BookmarkOnClick} className={styles.button}>
      <BookmarkIcon color={{
        fill: `${bookmark}`,
        stroke: 'black'
      }} />
    </button>
  )
}

export default Bookmark
