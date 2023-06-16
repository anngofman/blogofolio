
import { Main } from '../../components/Main'
import Title from '../../components/Title'
import TabsPanel from '../../components/buttons/Tabs/TabPanel'
import styles from '../../components/Main/main.module.scss'

export type Url = {
  title: string
  url: string
}

const tabsList: Url[] = [
  {
    title: 'All',
    url: 'all'
  },
  {
    title: 'My favorites',
    url: 'favorites'
  },
  {
    title: 'Popular',
    url: 'popular'
  }
]

const HomePage = () => {
  return (
    <div className={`${styles.main} `}>
      <div className={styles.blog}>
        <Title text='Blog' />
        <TabsPanel tabsList={tabsList} name='tab' />
        <Main type={tabsList} />
        navigator
      </div>
    </div>
    
  )
}

export default HomePage