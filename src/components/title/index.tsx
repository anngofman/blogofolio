import React from 'react'
import styles from './title.module.scss'
type Props = {
  className?:string,
  text:string
}

const Title = (props:Props) => {
  return (
    <h2 className={`${props.className} ${styles.title}`}>{props.text}</h2>
  )
}
export default Title