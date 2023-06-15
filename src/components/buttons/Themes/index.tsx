import styles from './theme.module.scss'
import dark from '../../../images/Dark.svg'
import light from '../../../images/Icon-Sun.svg'

type Props = {
  className?: string
  onCliickTheme?: () => void
  theme: 'light' | 'dark'
}
const ThemeBtn = (props: Props) => {

  return (
    <button className={styles.button} onClick={props.onCliickTheme}>
      {(props.theme === 'dark') ? <img src={dark} alt="Theme" /> : <img src={light} alt="lightTheme" />}
    </button>
  )
}

export default ThemeBtn