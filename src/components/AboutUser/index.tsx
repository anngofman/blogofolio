import LoginButton from '../buttons/Login'
import { useAuthContext } from '../../helpers/AuthProvider'
import styles from './aboutUser.module.scss'
import { useNavigate } from 'react-router-dom'

type Props = {
  className?: string
  text: string
}

const AboutUser = (props: Props) => {
  const userName: string[] = props.text.split(' ')
  const { isAuthorized, logout } = useAuthContext()
  const navigate = useNavigate()
  const onClick = () => {
    navigate('signIn')
  }

  return (
    <>
      {isAuthorized
        ? <>
          <div onClick={logout} className={`${styles.wrapper}`}>
            <div className={styles.authorized_icon}>
              <p>{`${userName[0][0].toLocaleUpperCase()}  ${userName[1][0].toLocaleUpperCase()}`}</p>
            </div>
            <p>{`${userName[0]}  ${userName[1]}`}</p>
          </div>
        </>
        : <LoginButton onClick={onClick} className={props.className} />
      }
    </>
  )
}

export default AboutUser