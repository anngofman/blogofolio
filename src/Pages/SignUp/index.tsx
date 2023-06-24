import Title from '../../components/Title'
import NavigateBlock from '../../components/nav'
import Wrapper from '../../components/Wrapper'
import FormSignUp from '../../components/forms/SignUp'
import styles from './signup.module.scss'

export const SignUpPage = () => {
  return (
    <Wrapper className={styles.signup }>
      <NavigateBlock back='Back to home' />
      <Title text={'Sign Up'} />
      <FormSignUp/>
    </Wrapper>
  )
}