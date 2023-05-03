import styles from './burgerButton.module.scss'
import close from '../../../images/button/close.svg'
import open from '../../../images/button/open.svg'

type Props = {
  onClick: () => void
  isActive: boolean
}

const BurgerButton = (props: Props) => {
  
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.isActive ? <img src={open} alt={'open'} /> : <img src={close} alt={'closes'} />}
    </button>
  )
}

export default BurgerButton