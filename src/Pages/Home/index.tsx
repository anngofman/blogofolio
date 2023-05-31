import React, { useContext } from 'react'
import { Main } from '../../components/Main'
import { ThemeContext } from '../../helpers/ThemeContext'

const HomePage = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <Main className={theme} />
    </>
  )
}

export default HomePage