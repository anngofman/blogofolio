import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import FormSignIn from '../../components/forms/SignIn'
import NavigateBlock from '../../components/nav'
import styles from './singInPage.module.scss' 

export const SignInPage = () => {
  
  return (
    <Wrapper className={styles.signIn}>
      <NavigateBlock back='Back to home' />
      <Title text={'Sign In'} />
      <FormSignIn  />
    </Wrapper>
  )
}
