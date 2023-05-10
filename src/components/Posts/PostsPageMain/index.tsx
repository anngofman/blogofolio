import React from 'react'
import { Post } from '..'
import styles from './postPageMain.module.scss'

const PostsPageMain = () => {
  return (
    <div className={styles.wrap}>

        <Post view='main' className={styles.firstMain} />
        <Post view='main' className={styles.secondMain} />
      <div className={styles.sideBar}>
        <Post view='sideBar' className={styles.firstSideBar}/>
        <Post view='sideBar' className={styles.secondSideBar}/></div>
      </div>
  )
}

export default PostsPageMain