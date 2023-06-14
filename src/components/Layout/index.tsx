import AsideMenu from '../AsideMenu'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../helpers/ThemeContext'
const Layout = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={styles.page}>
        <Header />
        <AsideMenu />
        <div className={`${styles.wrapp} ${styles[`${theme.theme}`]}`}>
          <div className={`${styles.outlet}`}>
            <Outlet />
          </div>
          <Footer className={`${styles.footer} `} />
        </div>
      </div>
    </>
  )
}

export default Layout