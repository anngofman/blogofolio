import AboutUser from '../AboutUser'
import styles from './asideMenu.module.scss'
import Button from '../buttons/Button'
import { useContext } from 'react'
import { MenuContext } from '../../helpers/MenuContext'
import { NavLink } from 'react-router-dom'
import ThemeBtn from '../buttons/Themes'
import { useDispatch } from 'react-redux'
import { setDarkThemeAction, setLightThemeAction } from '../../store/theme/actions'
import { useAuthContext } from '../../helpers/AuthProvider'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'

type Props = {
  className?: string
}

const AsideMenu = (props: Props) => {
  const { logout } = useAuthContext()
  const {menu} = useSelector((state:AppState)=>state.menu)
  const { isOpen } = useContext(MenuContext)
  const dispatch = useDispatch()
const stateMenu = ()=>{
  if (menu==='open') {
return true
  } else {
    return false
  }
}



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
        <AboutUser text='Anna Hofman' className={styles.login}/>
        <div className={styles.nav}>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/createPost'>
            Add Post
          </NavLink>
        </div>
      </div>
      <div className={styles.menuBottom}>
        <div className={styles.themeBtns}>
          <ThemeBtn theme='light' onCliickTheme={() => onClickTheme('light')} />
          <ThemeBtn theme='dark' onCliickTheme={() => onClickTheme('dark')} />
        </div>
        <Button type='button' typeStyle='secondary' text='Log Out' onClick={logout}/>
      </div>
    </div>
  )
}

export default AsideMenu