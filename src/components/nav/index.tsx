import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.scss'

type Props={
  title:string
}

const NavigateBlock = (props:Props) => {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}>Home</Link>
      <span className={styles.title}>{props.title}</span>
    </nav>
  )
}

export default NavigateBlock