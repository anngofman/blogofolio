import { ReactNode, createContext, useState } from "react"

type ThemeState = {
  theme: 'light' | 'dark'
}

type ThemeContextType = {
  theme: ThemeState,
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>
}

const defaultStateTheme = {} as ThemeContextType 
export const ThemeContext = createContext<ThemeContextType>(defaultStateTheme)

type Props = {
  children: ReactNode
}

const ThemeContextProvider = (props: Props) => {
  const [themeState, setThemeState] = useState<ThemeState>({
    theme:'light'
  })
  const providerValue : ThemeContextType = {
    theme: themeState,
    setTheme: setThemeState
  }

  return (
    <ThemeContext.Provider value={providerValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
