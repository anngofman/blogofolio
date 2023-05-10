import Title from '../Title'
import Button from '../buttons/Button'
import styles from './signIn.module.scss'

export const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <p>Back to home</p>
      <Title text={'Sign In'} />
      <form action="" className={styles.form}>
        <label htmlFor="">
          Email
        </label>
        <input type="text" placeholder='Your email' />
        <label htmlFor="">
          Password
        </label>
        <input type="text" placeholder='Your password' />
        <p>Forgot password?</p>
        <Button type={'primary'} text={'Sign In'} />
        <div className={styles.singUp}>
          <p>Don’t have an account?</p>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  )
}
