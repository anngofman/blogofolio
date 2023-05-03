import styles from './Bookmark.module.scss'
import bookmark from '../../../../images/button/connect/Bookmark.svg'


type Props = {
  onClick: () => void
  onChange: boolean
}

const Bookmark = (props: Props) => {

  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.onChange ? <img src={bookmark} alt={'open'} /> : <img src={bookmark} alt={'open'} />}
    </button>
  )
}

export default Bookmark
