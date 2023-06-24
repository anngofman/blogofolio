
import { Main } from '../../components/Main'
import Title from '../../components/Title'
import TabsPanel from '../../components/buttons/Tabs/TabPanel'
import styles from '../../Pages/Home/main.module.scss'
import Wrapper from '../../components/Wrapper'
import Pager from '../../components/Pager'

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
    <Wrapper>
      <div className={`${styles.home} `}>
        <div className={styles.blog}>
          <Title text='Blog' />
          <TabsPanel tabsList={tabsList} name='tab' />
          <Main type={tabsList} />
          <Pager total={100} itemPerPage={12} currentPage={5}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePage