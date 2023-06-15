import MenuMore from '../../../../Icon/MenuMore'
import styles from './MenuMoreButton.module.scss'


type Props = {
  onClick: () => void

}

const MenuMoreButton = (props: Props) => {

  return (
    <button onClick={props.onClick} className={styles.button}>
      <MenuMore color='black' />
    </button>
  )
}

export default MenuMoreButton