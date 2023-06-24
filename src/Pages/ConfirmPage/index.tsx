import React from 'react'
import Wrapper from '../../components/Wrapper'
import NavigateBlock from '../../components/nav'
import Title from '../../components/Title'
import styles from './confirm.module.scss'
import Button from '../../components/buttons/Button'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'

const ConfirmPage = () => {
  const reg = useSelector(( state:AppState) => state.register.user)

  return (
    <Wrapper className={styles.confirm}>
      <NavigateBlock back='Back to home' />
      <Title text={'Registration Confirmation'} />
      <form className={styles.form}>
        <p>Please activate your account with the activation<br/>
          link in the email {reg?.email}.<br/>Please, check your email</p>
        <Button type='button' typeStyle={'primary'} text={'Activate'} />
      </form>
    </Wrapper>
  )
}

export default ConfirmPage