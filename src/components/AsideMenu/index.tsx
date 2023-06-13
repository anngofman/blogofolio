import AboutUser from '../AboutUser'
import styles from './asideMenu.module.scss'
import Button from '../buttons/Button'
import DarkThemeBtn from '../buttons/Themes'
import { useContext } from 'react'
import { MenuContext } from '../../helpers/MenuContext'
import { NavLink } from 'react-router-dom'

type Props = {
  className?: string
}

const AsideMenu = (props: Props) => {

  const { isOpen } = useContext(MenuContext)
  return (
    // <div className={`${styles.menu} ${styles.open}`}></div>
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
          <DarkThemeBtn theme='light' />
          <DarkThemeBtn theme='dark' />
        </div>
        <Button type='secondary' text='Log Out' />
      </div>
    </div>
  )
}

export default AsideMenu