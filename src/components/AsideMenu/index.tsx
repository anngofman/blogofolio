import AboutUser from '../AboutUser'
import styles from './asideMenu.module.scss'
import Button from '../buttons/Button'
import DarkThemeBtn from '../buttons/Themes'
import { useContext } from 'react'
import { MenuContext } from '../../helpers/MenuContext'

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
          <li>
            Home
          </li>
          <li>
            Add Post
          </li>
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