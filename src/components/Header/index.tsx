import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderOptions,
  LanguageButton,
} from './styles'
import { List } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useContext, useState } from 'react'
import { PortfolioContext } from '@/contexts/shopList'

export function Header() {
  const { t } = useTranslation()
  const [englishLanguage, setEnglishLanguage] = useState(true)
  const { handleSetLanguage } = useContext(PortfolioContext)
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  function handleChangeLanguage() {
    if (englishLanguage) {
      changeLanguage('pt')
      handleSetLanguage('pt')
      setEnglishLanguage(false)
    } else {
      changeLanguage('en')
      handleSetLanguage('en')
      setEnglishLanguage(true)
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <LanguageButton onClick={handleChangeLanguage}>
            {englishLanguage ? 'EN' : 'PT'}
          </LanguageButton>
          <h2>MARIANA CASTRO</h2>
        </div>
        <HeaderItems>
          <List size={26} />
          <HeaderOptions>
            <p className="active">{t('home')}</p>
            <p>{t('portfolio')}</p>
            <p>{t('contact_me')}</p>
          </HeaderOptions>
        </HeaderItems>
      </HeaderContent>
      <span></span>
    </HeaderContainer>
  )
}
