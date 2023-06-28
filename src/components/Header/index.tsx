import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderOptions,
  LanguageButton,
  SmallMenu,
  SmallMenuOptions,
} from './styles'
import { List } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '@/contexts/portfolioContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const { t } = useTranslation()
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language')
      return storedLanguage
    }
    return 'en'
  })
  const { handleSetLanguage } = useContext(PortfolioContext)
  const [openMenu, setOpenMenu] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { i18n } = useTranslation()

  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng)
    }

    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language')
      if (storedLanguage) {
        setLanguage(storedLanguage)
        changeLanguage(storedLanguage)
      }
    }
  }, [i18n, language])

  function handleChangeLanguage() {
    if (language === 'en') {
      handleSetLanguage('pt')
      setLanguage('pt')
      localStorage.setItem('language', 'pt')
    } else {
      handleSetLanguage('en')
      setLanguage('en')
      localStorage.setItem('language', 'en')
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <LanguageButton onClick={handleChangeLanguage}>
            {isClient ? (language === 'en' ? 'EN' : 'PT') : ''}
          </LanguageButton>
          <Link href="/">
            <h2>MARIANA CASTRO</h2>
          </Link>
        </div>
        <HeaderItems>
          <SmallMenu onClick={() => setOpenMenu(!openMenu)}>
            <List size={26} />
            <SmallMenuOptions className={openMenu ? '' : 'hidden'}>
              <Link href="/">
                <p>{t('home')}</p>
              </Link>
              <Link href="/portfolio">
                <p>{t('portfolio')}</p>
              </Link>
              <Link href="/contact">
                <p>{t('contact')}</p>
              </Link>
            </SmallMenuOptions>
          </SmallMenu>
          <HeaderOptions>
            <Link href="/">
              <p className={pathname === '/' ? 'active' : ''}>{t('home')}</p>
            </Link>
            <Link href="/portfolio">
              <p className={pathname === '/portfolio' ? 'active' : ''}>
                {t('portfolio')}
              </p>
            </Link>
            <Link href="/contact">
              <p className={pathname === '/contact' ? 'active' : ''}>
                {t('contact')}
              </p>
            </Link>
          </HeaderOptions>
        </HeaderItems>
      </HeaderContent>
      <span></span>
    </HeaderContainer>
  )
}
