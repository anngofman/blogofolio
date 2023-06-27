
import { useSelector } from 'react-redux'
import styles from './searchInput.module.scss'
import { AppDispatch, AppState } from '../../../store'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchValueAction } from '../../../store/search/actions'
import { useParams } from 'react-router-dom'
type Props = {
  placeholder?: string
  isError?: boolean
  isVisible?: boolean
  className?: string

}

const InputSearch = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const searchValue = useSelector((state: AppState) => state.search.search)
  const { page } = useParams()

  useEffect(() => {
    dispatch(setSearchValueAction(searchValue, 6, (page ? +page*6 : 1)))
  }, [dispatch, page])

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    dispatch(setSearchValueAction(text, 6, 0))
  }
  const { placeholder, isError, isVisible } = props
  return (
    <input
      type="text"
      hidden={isVisible}
      className={`${styles.input} ${isError ? styles.error : 'null'} ${props.className}`}
      placeholder={placeholder}
      value={searchValue}
      onChange={handleSearchValue}
    />
  )
}

export default InputSearch