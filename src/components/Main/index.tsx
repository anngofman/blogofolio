// import { Post } from '../Posts'
import TabsPanel from '../buttons/Tabs/TabPanel'
import Title from '../Title'
import styles from './main.module.scss'
import PostsPage from '../Posts/PostsPageHead'
import PostsPageMain from '../Posts/PostsPageMain'
// import { SignIn } from '../SignIn'
// import { Success } from '../Success'
// import { SignUp } from '../SignUp'
type Props={
  className?:string 
}

export const Main = (props:Props) => {
  return (
    <div className={`${styles.main} ${styles[`${props.className}`]}`}>
      <div className={styles.blog}>
        <Title text='Blog' />
        <TabsPanel tabsList={['All', 'My favorites', 'Popular']} name='tab' />
        <div className='cards'>
          <PostsPage/>
          <PostsPageMain/>
          <PostsPageMain/>
          {/* <Post view='head' />
          <Post view='main' />
          <Post view='sideBar' />
          <Post view='head' /> */}
        </div>
        navigator
      </div>
      {/* <SignIn/> */}
      {/* <Success/> */}
      {/* <SignUp/> */}
    </div>
  )
}
