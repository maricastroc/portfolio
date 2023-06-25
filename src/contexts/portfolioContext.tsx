import { createContext, ReactNode, useState } from 'react'

interface PortfolioContextData {
  language: string
  handleSetLanguage: (language: string) => void
}

export const PortfolioContext = createContext<PortfolioContextData>(
  {} as PortfolioContextData,
)

interface PortfolioContextProviderProps {
  children: ReactNode
}

export default function PortfolioContextProvider({
  children,
}: PortfolioContextProviderProps) {
  const [language, setLanguage] = useState('en')

  function handleSetLanguage(language: string) {
    setLanguage(language)
  }

  const PortfolioContextValue: PortfolioContextData = {
    language,
    handleSetLanguage,
  }

  return (
    <PortfolioContext.Provider value={PortfolioContextValue}>
      {children}
    </PortfolioContext.Provider>
  )
}
