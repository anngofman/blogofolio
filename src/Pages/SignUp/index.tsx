import Title from '../../components/Title'
import Button from '../../components/buttons/Button'
import styles from './signUp.module.scss'

export const SignUpPage = () => {
  return (
    <div className={styles.wrapper}>
      <p>Back to home</p>
      <Title text={'Sign Up'} />
      <form action="" className={styles.form}>
        <label htmlFor="">
          Name
        </label>
        <input type="text" placeholder='Your name' />
        <label htmlFor="">
          Email
        </label>
        <input type="text" placeholder='Your email' />
        <label htmlFor="">
          Password
        </label>
        <input type="text" placeholder='Your password' />
        <label htmlFor="">
          Confirm password
        </label>
        <input type="text" placeholder='Confirm password' />
        <Button className={styles.btnSingUp} type={'primary'} text={'Sign Up'} />
        <div className={styles.singIn}>
          <p>Already have an account?</p>
          <button >Sign In</button>
        </div>
      </form>
    </div>
  )
}