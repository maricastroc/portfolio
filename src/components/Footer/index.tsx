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

export function Footer() {
  const { t } = useTranslation()

  return (
    <FooterContainer>
      <FooterContent>
        <TextContainer>
          <h2>MC.</h2>
          <PagesContainer>
            <p>{t('home')}</p>
            <p>{t('portfolio')}</p>
            <p>{t('contact')}</p>
          </PagesContainer>
        </TextContainer>
        <IconsContainer>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconsContainer>
      </FooterContent>
    </FooterContainer>
  )
}
