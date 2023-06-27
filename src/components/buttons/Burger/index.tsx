import styles from './burgerButton.module.scss'
import close from '../../../images/Cancel.svg'
import open from '../../../images/Burger.svg'

type Props = {
  onClick: () => void
  isActive: boolean
  className?:string
}

const BurgerButton = (props: Props) => {
  return (
    <button onClick={props.onClick} className={`${styles.button} ${props.className}`}>
      {!props.isActive ? <img src={open} alt={'open'} /> : <img src={close} alt={'closes'} />}
    </button>
  )
}

export default BurgerButton