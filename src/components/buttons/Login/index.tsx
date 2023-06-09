import styles from './loginButton.module.scss'
import user from '../../../images/user.svg'

type Props = {
  onClick?: () => void
  className?: string
}

const LoginButton = (props: Props) => {
  const loginClass = `
  ${styles.button} 
  ${styles[`${props.className}`]} 
  `
  return (
    <button
      onClick={props.onClick}
      className={loginClass}>
      <img src={user} alt={'user'} />
    </button>
  )
}

export default LoginButton