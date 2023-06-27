import styles from './Bookmark.module.scss'
import BookmarkIcon from '../../../../Icon/Bookmark'

type Props = {
  title?: string
  onClick?: () => void
  isFav?: boolean
}

const Bookmark = ({ title, onClick, isFav }: Props) => {
  const BookmarkOnClick = () => {
    if(onClick){
      onClick() 
    } 
  }

  return (
    <button onClick={BookmarkOnClick} className={styles.button}>
      <div>
        <BookmarkIcon color={{
          fill: `${isFav ?  'black' : 'none'}`,
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
