import React from 'react'
import styles from './LikeButton.module.scss'
import LikeIcon from '../../../../Icon/Like'


type Props = {
  onClick?: () => void
  like?: number
}

const LikeButton = (props: Props) => {

  return (
    <button onClick={props.onClick}
      className={styles.button}>
        <LikeIcon color='black'/>
      <span>{props.like}</span>
    </button>
  )
}

export default LikeButton
