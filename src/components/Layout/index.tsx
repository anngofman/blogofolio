import AsideMenu from '../AsideMenu'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../helpers/ThemeContext'
const Layout = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <div className={styles.page}>
        <Header />
        <AsideMenu />
        <div className={`${styles.outlet} ${styles[`${theme}`]}` }>
          <Outlet/>
        </div>
        <Footer className={styles.footer} />
      </div>

    </>
  )
}

export default Layout