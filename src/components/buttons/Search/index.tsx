import styles from './searchButton.module.scss'
import search from '../../Icons/buttons/Search/search.svg'

type Props = {
  onClick?: () => void
}

const SearchButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={styles.button}>
      <img src={search} alt={'search'} />
    </button>
  )
}

export default SearchButton