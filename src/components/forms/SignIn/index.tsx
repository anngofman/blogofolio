import styles from './signIn.module.scss'
import Button from '../../buttons/Button'
import { NavLink, useNavigate } from 'react-router-dom'
// import { useAuthContext } from '../../../helpers/AuthProvider'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { FormType } from '../../../types/formType'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import { LoginAction } from '../../../store/auth/actions'
import { useAuthContext } from '../../../helpers/AuthProvider'


const FormSignIn = () => {
  const { login } = useAuthContext()
  // const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [form, setForm] = useState<FormType>({
    email: '',
    password: ''
  })
  // const onClick = () => {
  //   navigate(location.state.pathname, { replace: true })
  // }

  const onChangeFormElement = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }, [form, setForm]
  )

  const onFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = form
if (email && password) {
  login()
  dispatch(LoginAction(email, password, ()=>navigate('/')))
}

  }, [dispatch, navigate, form,login])


  return (
    <form action="" className={styles.form} onSubmit={onFormSubmit}>
      <label htmlFor="">
        Email
      </label>
      <input type="email" placeholder='Your email' name='email' onChange={onChangeFormElement} />
      <label htmlFor="">
        Password
      </label>
      <input type="password" placeholder='Your password' name='password' onChange={onChangeFormElement} />
      <p>Forgot password?</p>
      <Button type='submit' typeStyle={'primary'} text={'Sign In'} />
      <div className={styles.signUp}>
        <p>Don’t have an account?</p>
        <NavLink to='/signUp'>
          Sign Up
        </NavLink>
      </div>
    </form>
  )
}

export default FormSignIn