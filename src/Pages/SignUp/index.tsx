import Title from '../../components/Title'
import NavigateBlock from '../../components/nav'
import Wrapper from '../../components/Wrapper'
import FormSingUp from '../../components/forms/SingUp'

export const SignUpPage = () => {
  return (
    <Wrapper>
      <NavigateBlock back='Back to home' />
      <Title text={'Sign Up'} />
      <FormSingUp/>
    </Wrapper>
  )
}