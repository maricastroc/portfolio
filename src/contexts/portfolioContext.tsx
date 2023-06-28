import { createContext, ReactNode, useState } from 'react'

interface PortfolioContextData {
  language: string | null
  handleSetLanguage: (language: string) => void
}

export const PortfolioContext = createContext<PortfolioContextData>(
  {} as PortfolioContextData,
)

interface PortfolioContextProviderProps {
  children: ReactNode
  initialLanguage: string
}

export default function PortfolioContextProvider({
  children,
  initialLanguage = 'en',
}: PortfolioContextProviderProps) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language')
      return storedLanguage || initialLanguage
    }
    return initialLanguage
  })

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
