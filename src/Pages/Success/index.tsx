import Title from '../../components/Title'
import Button from '../../components/buttons/Button'
import styles from './success.module.scss'

export const SuccessPage = () => {
  return (
    <div className={styles.wrapper}>
      <p>Back to home</p>
      <Title text={'Success'} />
      <form action="" className={styles.form}>
        <p>Какой-то текст очень большой допустим такой</p>
        <Button type={'primary'} text={'Клик-клак'} />
      </form>
    </div>
  )
}
