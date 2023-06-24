import { Link } from 'react-router-dom'
import Button from '../../buttons/Button'
import styles from './addPost.module.scss'
import { ChangeEvent } from 'react'

const FormAddPost = () => {
  const loadImgHandler = (e:ChangeEvent<HTMLInputElement>)=>{
const file= e.target.files?.[0]

if (file) {
  
}
  }
  return (
    <form action="" className={styles.form}>
      <div>
        <label htmlFor="">
          Title
        </label>
        <input type="text" placeholder='Title' />
      </div>
      <div className={styles.import}>
        <span>
          <label htmlFor="">
            Lesson number
          </label>
          <input type="text" placeholder='Lesson namber' />
        </span>
        <span>
          <label htmlFor="">
            Image
          </label>
          <input type="file" placeholder=' Image' onChange={loadImgHandler}/>
        </span>
      </div>
      <div>
        <label htmlFor="">
          Descriptions
        </label>
        <input type="textarea " placeholder='Add your text' />
      </div>
      <div>
        <label htmlFor="">
          text
        </label>
        <input type="textarea " placeholder='Add your text' />
      </div>
      <div className={styles.btn}>
        <Button type='button' text='Delete' typeStyle='secondary2' />
        <div className={styles.btnRight}>
          <Button type='button' text='Cancel' typeStyle='secondary' />
          <Link to='/'><Button type='button' text='Add post' typeStyle='primary' /></Link>
        </div>
      </div>
    </form>
  )
}

export default FormAddPost