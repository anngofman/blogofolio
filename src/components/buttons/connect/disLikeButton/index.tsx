import React from 'react'
import styles from './DisLikeButton.module.scss'
import dislikeImage from '../../../../images/button/connect/dislike.svg'


type Props = {
  onClick: () => void
  dislike: number
}

const DisLikeButton = (props: Props) => {

  
  return (
    <button onClick={props.onClick}
      className={styles.button}>
      <img src={dislikeImage} alt={'open'} />
      <span>{props.dislike}</span>
    </button>
  )
}

export default DisLikeButton
