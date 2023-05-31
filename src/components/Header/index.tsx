import React, { useContext, useState } from 'react'
import BurgerButton from '../buttons/Burger'
import styles from './header.module.scss'
import SearchButton from '../buttons/Search'
import InputSearch from '../Inputs/SearchInput'
import AboutUser from '../AboutUser'
import { MenuContext } from '../../helpers/MenuContext'

export const Header = () => {
  const [burgerState, setBurgerState] = useState(true)
  const [inputState, setInputState] = useState(true)
  const {isOpen, setIsOpen} = useContext(MenuContext)

  const BurgerOnClick = () => {
    setBurgerState(!isOpen ? burgerState : !burgerState)
    setIsOpen(!isOpen)
 }

  const searchButtonClick = () => {
    setInputState((inputState) => !inputState)
  }


  return (
    <div className={styles.header}>
      <BurgerButton onClick={BurgerOnClick} isActive={burgerState} />
      <div className={styles.navigation}>
        <InputSearch className={styles.search} isVisible={inputState} placeholder='Search...' />
        <SearchButton onClick={searchButtonClick} />
        <AboutUser text={'Anna Hofman'} />
      </div>
    </div>
  )
}
