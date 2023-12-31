import { useTranslation } from 'react-i18next'
import {
  FooterContainer,
  FooterContent,
  IconsContainer,
  PagesContainer,
  TextContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export function Footer() {
  const { t } = useTranslation()

  return (
    <FooterContainer>
      <FooterContent>
        <TextContainer>
          <h2>MC.</h2>
          <PagesContainer>
            <Link href="/">
              <p>{t('home')}</p>
            </Link>
            <Link href="/portfolio">
              <p>{t('portfolio')}</p>
            </Link>
            <Link href="/contact">
              <p>{t('contact')}</p>
            </Link>
          </PagesContainer>
        </TextContainer>
        <IconsContainer>
          <a
            href="https://github.com/maricastroc"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/maricastroc"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/mariana-castro-297586264/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </IconsContainer>
      </FooterContent>
    </FooterContainer>
  )
}
