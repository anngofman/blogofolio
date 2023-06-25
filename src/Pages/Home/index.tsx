
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
  },
  {
    title: 'My Posts',
    url: 'myposts'
  }
]

const HomePage = () => {
  const tokens = useSelector((state:AppState)=>state.auth.tokens)
  console.log(tokens)
  const { page } = useParams()
  const currenPage = page ? +page : 1
  return (
    <Wrapper>
      <div className={`${styles.home} `}>
        <div className={styles.blog}>
          <Title text='Blog' />
          <TabsPanel tabsList={tabsList} name='tab' />
          <Main page={currenPage} type={tabsList} />
          {/* <Pager endpoint='posts' total={total} itemPerPage={12} currentPage={currenPage}/> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePage