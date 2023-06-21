import styles from './signIn.module.scss'
import Button from '../../buttons/Button'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../helpers/AuthProvider'


const FormSingIn = () => {
  const { login } = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()
  const onClick = () => {
    login()
    navigate(location.state.pathname, { replace: true })
  }
  
  return (
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
        <Button type={'primary'} text={'Sign In'} onClick={onClick}/>
        <div className={styles.singUp}>
          <p>Don’t have an account?</p>
          <NavLink to='/signUp'>
            Sign Up
          </NavLink>
        </div>
      </form>
  )
}

export default FormSingIn