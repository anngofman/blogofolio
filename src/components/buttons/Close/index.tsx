import styles from './close.module.scss'
import close from '../../../images/Cancel.svg'

type Props = {
  onClick?: () => void
  className?: string
}

const CloseButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}>
      <img src={close} alt={'close'} />
    </button >
  )
}

export default CloseButton