import React from 'react'
import styles from './LikeButton.module.scss'
import likeImage from '../../../../images/button/connect/like.svg'


type Props = {
  onClick: () => void
  like: string
}

const LikeButton = (props: Props) => {

  return (
    <button onClick={props.onClick}
      className={styles.button}>
      <img src={likeImage} alt={'open'} />
      <span>{props.like}</span>
    </button>
  )
}

export default LikeButton
