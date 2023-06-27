import {
  GetInTouchContainer,
  GetInTouchContent,
  IconsContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

export function GetInTouch() {
  const { t } = useTranslation()

  return (
    <GetInTouchContainer>
      <h2>{t('get_in_touch')}</h2>
      <GetInTouchContent>
        <p>{t('text_get_in_touch')}</p>
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
      </GetInTouchContent>
    </GetInTouchContainer>
  )
}
