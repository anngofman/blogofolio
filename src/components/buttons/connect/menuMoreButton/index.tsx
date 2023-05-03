import styles from './MenuMoreButton.module.scss'
import menuMoreImage from '../../../../images/button/connect/MenuMore.svg'


type Props = {
  onClick: () => void

}

const MenuMoreButton = (props: Props) => {

  return (
    <button onClick={props.onClick} className={styles.button}>
      <img src={menuMoreImage} alt={'open'} /> 
    </button>
  )
}

export default MenuMoreButton