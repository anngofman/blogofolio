import AsideMenu from '../AsideMenu'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
const Layout = () => {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <AsideMenu />
        <div className={styles.outlet}>
          <Outlet />
        </div>

        <Footer className={styles.footer} />
      </div>

    </>
  )
}

export default Layout