import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import FormSingIn from '../../components/forms/SingIn'
import NavigateBlock from '../../components/nav'

export const SignInPage = () => {
  
  return (
    <Wrapper >
      <NavigateBlock back='Back to home' />
      <Title text={'Sign In'} />
      <FormSingIn  />
    </Wrapper>
  )
}
