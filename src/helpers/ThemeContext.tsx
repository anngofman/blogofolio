import { ReactNode, createContext } from "react"

type ThemeContextType = 'light' | 'dark'
export const defaultStateTheme = 'dark'
export const ThemeContext = createContext<ThemeContextType>(defaultStateTheme)

type Props = {
  children: ReactNode
}

const ThemeContextProvider = (props: Props) => {
  return (
    <ThemeContext.Provider value={defaultStateTheme}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
