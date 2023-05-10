import styles from './theme.module.scss'
import dark from '../../Icons/buttons/Theme/themeDark.svg'
import light from '../../Icons/buttons/Theme/themeLight.svg'

type Props = {
  className?: string
  onCliickThemeDark?: () => void
  theme: 'light' | 'dark'
}
const DarkThemeBtn = (props: Props) => {

  return (
    <button className={styles.button} onClick={props.onCliickThemeDark}>
      {(props.theme === 'dark') ? <img src={dark} alt="darkTheme" /> : <img src={light} alt="lightTheme" />}
    </button>
  )
}

export default DarkThemeBtn