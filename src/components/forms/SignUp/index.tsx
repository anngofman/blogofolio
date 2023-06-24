import styles from './signUpForm.module.scss'
import Button from '../../buttons/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../../store'
import { registrationAction } from '../../../store/registration/actions'
import { useSelector } from 'react-redux'
import { FormType } from '../../../types/formType'


export type FormErrorsType = Partial<Record<keyof FormType, string>>  /* & {g: string} */

const FormSignUp = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [form, setForm] = useState<FormType>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [formErrors, setFormErrors] = useState<Partial<FormErrorsType>>({})
  const errors = useSelector((state: AppState) => state.register.errors)

  useEffect(() => {
    if (errors) {
      setFormErrors(errors)
    }
  }, [errors])

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
    const { username, email, password, confirmPassword } = form


    if (password !== confirmPassword) {
      setFormErrors({
        ...formErrors,
        confirmPassword: 'Пароли не совпадают'
      })
    }
    if (username && email && password && password === confirmPassword) {
      const regSuccess = () => navigate('/confirm')
      dispatch(registrationAction(username, email, password, regSuccess))
    }
  },[dispatch,navigate,form])

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <label htmlFor="">
        Name
      </label>
      <input type="text" placeholder='Your name' name='username' onChange={onChangeFormElement} />
      {
        formErrors.username &&
        <label className={styles.errors}>
          {formErrors.username}
        </label>
      }
      <label htmlFor="">
        Email
      </label>
      <input type="email" placeholder='Your email' name='email' onChange={onChangeFormElement} />
      {
        formErrors.email &&
        <label className={styles.errors}>
          {formErrors.email}
        </label>
      }
      <label htmlFor="">
        Password
      </label>
      <input type="password" placeholder='Your password' name='password' onChange={onChangeFormElement} />
      {
        formErrors.password &&
        <label className={styles.errors}>
          {formErrors.password}
        </label>
      }
      <label htmlFor="">
        Confirm password
      </label>
      <input type="password" placeholder='Confirm password' name='confirmPassword' onChange={onChangeFormElement} />
      {
        formErrors?.confirmPassword && (
          <label className={styles.errors}>
            {formErrors.confirmPassword}
          </label>
        )}
      <Button type='submit' className={styles.btnSignUp} typeStyle={'primary'} text={'Sign Up'} />
      <div className={styles.signIn}>
        <p>Already have an account?</p>
        <NavLink to='/signIn'>
          Sign In
        </NavLink>
      </div>
    </form>
  )
}

export default FormSignUp