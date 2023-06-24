import { ReactNode } from 'react'
import styles from './wrapp.module.scss'

type Props = {
  children: ReactNode
  className?:string
}

const Wrapper = (props:Props) => {
  return (
    <div className={`${styles.wrapp} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Wrapper