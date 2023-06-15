import React, { useContext, useState } from 'react'
import BurgerButton from '../buttons/Burger'
import styles from './header.module.scss'
import SearchButton from '../buttons/Search'
import InputSearch from '../Inputs/SearchInput'
import AboutUser from '../AboutUser'
import { MenuContext } from '../../helpers/MenuContext'
import CloseButton from '../buttons/Close'

export const Header = () => {
  const [burgerState, setBurgerState] = useState(true)
  const [inputState, setInputState] = useState(true)
  const { isOpen, setIsOpen } = useContext(MenuContext)

  const BurgerOnClick = () => {
    setBurgerState(!isOpen ? burgerState : !burgerState)
    setIsOpen(!isOpen)
  }
const closeButtonOnClick = () => {
  setInputState((inputState) => !inputState)
}
  const searchButtonOnClick = () => {
    setInputState((inputState) => !inputState)
  }

  // ${styles[`${(!isAuthorized) ? 'notAuthorized' : ''}`]}
  return (
    <div className={styles.header}>
      <BurgerButton onClick={BurgerOnClick} isActive={burgerState} />
    
        <InputSearch className={styles.search} isVisible={inputState} placeholder='Search...' />
        <CloseButton className={`
        ${styles.btnClose}
        ${styles[`${inputState ? 'close' : ''}`]}
        `} onClick={closeButtonOnClick}/>
        <SearchButton onClick={searchButtonOnClick} />
        <AboutUser text={'Anna Hofman'} />
      </div>
   
  )
}
