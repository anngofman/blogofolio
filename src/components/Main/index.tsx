import TabsPanel from '../buttons/Tabs/TabPanel'
import PostList from '../Posts/PostList'
import Title from '../Title'
import styles from './main.module.scss'

type Props = {
  className?: string
}

export const Main = (props: Props) => {
  return (
    <div className={`${styles.main} ${styles[`${props.className}`]}`}>
      <div className={styles.blog}>
        <Title text='Blog' />
        <TabsPanel tabsList={['All', 'My favorites', 'Popular']} name='tab' />
        <div className='cards'>
          <PostList />
        </div>
        navigator
      </div>
    </div>
  )
}
