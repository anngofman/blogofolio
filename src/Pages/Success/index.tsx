import { useNavigate } from 'react-router-dom'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import Button from '../../components/buttons/Button'
import NavigateBlock from '../../components/nav'
import styles from './success.module.scss'

export const SuccessPage = () => {
const navigate = useNavigate()



  return (
    <Wrapper className={styles.success}>
      <NavigateBlock back='Back to home' />
      <Title text={'Success'} />
      <form className={styles.form}>
        <p>Email confirmed.
Your registration is now completed</p>
        <Button type='button' typeStyle={'primary'} text={'Go to home'} onClick={()=>navigate('/')} />
      </form>
    </Wrapper>

  )
}
