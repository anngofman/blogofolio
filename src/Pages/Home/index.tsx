
import { Main } from '../../components/Main'
import Title from '../../components/Title'
import TabsPanel from '../../components/buttons/Tabs/TabPanel'
import styles from '../../Pages/Home/main.module.scss'
import Wrapper from '../../components/Wrapper'
import Pager from '../../components/Pager'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'


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
  const { page } = useParams()
  const total = useSelector((state: AppState) => state.post.count)
  const currenPage = page ? +page : 1
  const numPage= page? +page : 1
  return (
    <Wrapper>
      <div className={`${styles.home} `}>
        <div className={styles.blog}>
          <Title text='Blog' />
          <TabsPanel tabsList={tabsList} name='tab' />
          <Main page={numPage} type={tabsList} />
          <Pager total={total} itemPerPage={12} currentPage={currenPage}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePage