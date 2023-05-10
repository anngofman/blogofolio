import { Post } from ".."
import styles from './postsPageHead.module.scss'


const PostsPage = () => {


  return (<>
    <div className={styles.wrap}>
      <Post view={'head'} />
      <div>
        <Post view={'sideBar'} className={'firstSideBar'} />
        <Post view={'sideBar'} className={'secondSideBar'} />
      </div>
    </div>
  </>

  )
}

export default PostsPage