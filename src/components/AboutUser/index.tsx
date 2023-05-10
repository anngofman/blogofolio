import LoginButton from '../buttons/Login'
import styles from './aboutUser.module.scss'
type Props = {
  className?: string
  text: string
}

const AboutUser = (props: Props) => {
  const userName: string[] = props.text.split(' ')
  const isAuthorized: boolean = false
  return (
    <>
      <LoginButton className={(isAuthorized) ? 'notAuthorized' : ''} />
      <div className={`
        ${styles.wrapper}
        ${styles[`${(!isAuthorized) ? 'notAuthorized' : ''}`]}
                      `}>
          <div className={styles.authorized_icon}>
            <p>{`${userName[0][0].toLocaleUpperCase()}  ${userName[1][0].toLocaleUpperCase()}`}</p>
          </div>
          <p>{`${userName[0]}  ${userName[1]}`}</p>
      </div>
    </>

  )
}

export default AboutUser
//   