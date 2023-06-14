import styles from './theme.module.scss'
import dark from '../../Icons/buttons/Theme/themeDark.svg'
import light from '../../Icons/buttons/Theme/themeLight.svg'

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