import styles from './Bookmark.module.scss'
import BookmarkIcon from '../../../Icons/buttons/Bookmark'
import { useCallback, useState } from 'react'




const Bookmark = () => {

  const [bookmark, setBookmark] = useState('none')

  const BookmarkOnClick = useCallback(() => {
    
    setBookmark(bookmark => !bookmark ? bookmark = '#313037' : bookmark = 'none')
  }, [])

  return (
    <button onClick={BookmarkOnClick} className={styles.button}>
      <BookmarkIcon color={bookmark} />
    </button>
  )
}

export default Bookmark
