import styles from './singUpForm.module.scss'
import Button from '../../buttons/Button'
import { NavLink } from 'react-router-dom'

const FormSingUp = () => {
  return (
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
          <NavLink to='/signIn'>
            Sign In
          </NavLink>
        </div>
      </form>
  )
}

export default FormSingUp