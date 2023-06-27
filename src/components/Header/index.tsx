import React, { useContext, useState } from 'react'
import BurgerButton from '../buttons/Burger'
import styles from './header.module.scss'
import SearchButton from '../buttons/Search'
import InputSearch from '../Inputs/SearchInput'
import AboutUser from '../AboutUser'
import { MenuContext } from '../../helpers/MenuContext'
import CloseButton from '../buttons/Close'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearSearchAction } from '../../store/search/actions'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputState, setInputState] = useState(true)
  const { isOpen, setIsOpen } = useContext(MenuContext)

  const BurgerOnClick = () => {
    setIsOpen(!isOpen)
  }

  const closeButtonOnClick = () => {
    setInputState((inputState) => !inputState)
    dispatch(clearSearchAction())
    navigate('/')
  }
  const searchButtonOnClick = () => {
    setInputState((inputState) => !inputState)
    navigate('/search')
  }

  return (
    <div className={styles.header}>
      <BurgerButton onClick={BurgerOnClick} isActive={isOpen} className={styles.burger} />
      <InputSearch className={styles.search} isVisible={inputState} placeholder='Search...' />
      <CloseButton className={`
        ${styles[`${inputState ? 'close' : ''}`]}
        `} onClick={closeButtonOnClick} />
      <SearchButton onClick={searchButtonOnClick} />
      <AboutUser text={'Anna Hofman'} />
    </div>

  )
}
