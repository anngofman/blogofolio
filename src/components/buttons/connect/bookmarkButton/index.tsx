import styles from './Bookmark.module.scss'
import BookmarkIcon from '../../../../Icon/Bookmark'
import { useCallback, useState } from 'react'

type Props = {
  title?: string
}


const Bookmark = ({ title }: Props) => {

  const [bookmark, setBookmark] = useState('none')

  const BookmarkOnClick = useCallback(() => {
    setBookmark(bookmark => bookmark === 'none' ? bookmark = 'black' : bookmark = 'none')
  }, [])

  return (
    <button onClick={BookmarkOnClick} className={styles.button}>
      <div>
        <BookmarkIcon color={{
          fill: `${bookmark}`,
          stroke: 'black'
        }} />
      </div>
      <div>
        {title}
      </div>
    </button>
  )
}

export default Bookmark
