import AboutUser from '../AboutUser'
import styles from './asideMenu.module.scss'
import Button from '../buttons/Button'
import { useContext } from 'react'
import { MenuContext } from '../../helpers/MenuContext'
import { NavLink } from 'react-router-dom'
import ThemeBtn from '../buttons/Themes'
// import { ThemeContext } from '../../helpers/ThemeContext'
// import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { selectTheme } from '../../store/theme/selectors'
import { setDarkThemeAction, setLightThemeAction } from '../../store/theme/actions'

type Props = {
  className?: string
}

const AsideMenu = (props: Props) => {
  const { isOpen } = useContext(MenuContext)
  // const { setTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const onClickTheme = (theme: string) => {
    theme === 'light'
      ? dispatch(setLightThemeAction())
      : dispatch(setDarkThemeAction())
  }
  return (
    <div className={`
    ${styles.menu} 
    ${isOpen ? styles.open : ''}  
    `}>
      <div className={styles.menuTop}>
        <AboutUser text='Anna Hofman' />
        <ul>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/createPost'>
            Add Post
          </NavLink>
        </ul>
      </div>
      <div className={styles.menuBottom}>
        <div className={styles.themeBtns}>
          <ThemeBtn theme='light' onCliickTheme={() => onClickTheme('light')} />
          <ThemeBtn theme='dark' onCliickTheme={() => onClickTheme('dark')} />
        </div>
        <Button type='secondary' text='Log Out' />
      </div>
    </div>
  )
}

export default AsideMenu