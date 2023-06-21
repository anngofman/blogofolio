import AsideMenu from '../AsideMenu'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
// import { useContext } from 'react'
// import { ThemeContext } from '../../helpers/ThemeContext'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'


const Layout = () => {
  // const {theme} = useContext(ThemeContext)
  const {theme} = useSelector(selectTheme)
  
  console.log(theme)
  return (
    <>
      <div className={styles.page}>
        <Header />
        <AsideMenu />
        <div className={`${styles.wrapp} ${styles[`${theme}`]}`}>
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