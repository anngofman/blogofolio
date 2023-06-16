import { ReactNode } from 'react'
import styles from './wrapp.module.scss'

type Props = {
  children: ReactNode
}

const Wrapper = (props:Props) => {
  return (
    <div className={styles.wrapp}>
      {props.children}
    </div>
  )
}

export default Wrapper