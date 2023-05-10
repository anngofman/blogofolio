
import styles from './searchInput.module.scss'
type Props = {
  text?: string
  placeholder?: string
  isError?: boolean
  isVisible?: boolean
}

const InputSearch = (props: Props) => {
  const { text, placeholder, isError, isVisible } = props
  return (
    <input
      type="text"
      hidden={isVisible}
      className={`${styles.input} ${isError ? styles.error : 'null'}`}
      placeholder={placeholder}
      value={text}
    />
  )
}

export default InputSearch