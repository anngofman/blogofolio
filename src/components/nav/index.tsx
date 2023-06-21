import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.scss'

type Props={
  back:string
  title?:string
}

const NavigateBlock = (props:Props) => {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}>{props.back}</Link>
      <span className={styles.title}>{props.title}</span>
    </nav>
  )
}

export default NavigateBlock