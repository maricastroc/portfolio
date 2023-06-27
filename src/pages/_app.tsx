import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import PortfolioContextProvider from '@/contexts/portfolioContext'
import { Footer } from '@/components/Footer'

library.add(fas, faGithub, faInstagram, faLinkedinIn)

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioContextProvider>
      <I18nextProvider i18n={i18n}>
        <Container>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </I18nextProvider>
    </PortfolioContextProvider>
  )
}
