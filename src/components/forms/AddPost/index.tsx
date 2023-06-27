import { useNavigate } from 'react-router-dom'
import Button from '../../buttons/Button'
import styles from './addPost.module.scss'
import { ChangeEvent, useCallback, useState } from 'react'
import { CreatePostAction } from '../../../store/createPost/actions'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'

type FormCreateType = {
  title: string
  text: string
  description: string
  lesson_num: number
}

const FormAddPost = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [image, setImage] = useState<File | string>('')
  const navigate = useNavigate()
  const [form, setForm] = useState<FormCreateType>({
    title: '',
    text: '',
    description: '',
    lesson_num: 0
  })

  const onChangeFormElement = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }, [form, setForm]
  )

  const loadImgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      setImage(file)
    }
  }
  console.log(form);
  const onDeleteForm = () => {
    

    setForm((prevState) => ({
      ...prevState,
      title: '',
      text: '',
      description: '',
      lesson_num: 0
    }))
    setImage('')
    console.log(form);
    
  }

  const onPostCreateClick = () => {
    const nav = () => navigate('/')
    const { title, text, description, lesson_num } = form
    dispatch(CreatePostAction(title, text, description, lesson_num, image, nav))
  }

  return (
    <form action="" className={styles.form}>
      <div>
        <label htmlFor="">
          Title
        </label>
        <input value={form.title} type="text" placeholder='Title' name='title' onChange={onChangeFormElement} />
      </div>
      <div className={styles.import}>
        <span>
          <label htmlFor="">
            Lesson number
          </label>
          <input value={form.lesson_num}  type="number" placeholder='Lesson number' name='lesson_num' onChange={onChangeFormElement} />
        </span>
        <span>
          <label htmlFor="">
            Image
          </label>
          <input type="file" placeholder=' Image' name='image' onChange={loadImgHandler} />
        </span>
      </div>
      <div>
        <label htmlFor="">
          Descriptions
        </label>
        <input value={form.description}  type="textarea " placeholder='Add your text' name='description' onChange={onChangeFormElement} />
      </div>
      <div>
        <label htmlFor="">
          text
        </label>
        <input value={form.text}  type="textarea " placeholder='Add your text' name='text' onChange={onChangeFormElement} />
      </div>
      <div className={styles.btn}>
        <Button type='button' text='Delete' typeStyle='secondary2' onClick={onDeleteForm} />
        <div className={styles.btnRight}>
          <Button type='button' text='Cancel' typeStyle='secondary' onClick={()=> navigate('/')}/>
          <Button type='button' text='Add post' typeStyle='primary' onClick={onPostCreateClick} />
        </div>
      </div>
    </form>
  )
}

export default FormAddPost