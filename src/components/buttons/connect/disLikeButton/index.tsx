import styles from './DisLikeButton.module.scss'
import DisLikeIcon from '../../../../Icon/DisLike'

type Props = {
  onClick?: () => void
  dislike?: number
}

const DisLikeButton = (props: Props) => {  
  return (
    <button onClick={props.onClick}
      className={styles.button}>
      <DisLikeIcon color='black'/>
      <span>{props.dislike}</span>
    </button>
  )
}

export default DisLikeButton
