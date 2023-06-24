import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, AppState } from '../../store'
import { activationAction } from '../../store/activation/actions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import NavigateBlock from '../../components/nav'
import Button from '../../components/buttons/Button'
import Title from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import styles from './active.module.scss'

const ActivatePage = () => {
  const { uid, token } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const active = useSelector((state: AppState) => state.activater.isActivated)
  console.log(active)
  const activSuccess = () => navigate('/success')

  useEffect(() => {
    if (uid && token) {
      dispatch(activationAction(uid, token, activSuccess))
    }
  }, [uid, token])

  return (
    <Wrapper className={styles.activate}>
      <NavigateBlock back='Back to home' />
      <Title text={'Activate Page'} />
      <form className={styles.form}>
        <p>Подтвердите, что вы прошли активацию</p>
        <Button type='button' typeStyle={'primary'} text={'Activate'} onClick={activSuccess} />
      </form>
    </Wrapper>
  )
}

export default ActivatePage