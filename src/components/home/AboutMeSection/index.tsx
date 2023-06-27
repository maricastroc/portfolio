import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import {
  AboutMeContainer,
  AboutMeHeader,
  AboutMeText,
  PortfolioButton,
} from './styles'
import Link from 'next/link'

export function AboutMeSection() {
  const { t } = useTranslation()

  return (
    <AboutMeContainer>
      <AboutMeHeader>
        <FontAwesomeIcon icon={faTerminal} />
        <h2 className="aboutMe">{t('about_me')}</h2>
      </AboutMeHeader>
      <AboutMeText>
        <p>{t('about_me_description_1')}</p>
        <p>{t('about_me_description_2')}</p>
        <p>{t('check_my_work')}</p>
        <Link href="/portfolio">
          <PortfolioButton>{t('go_to_portfolio')}</PortfolioButton>
        </Link>
      </AboutMeText>
    </AboutMeContainer>
  )
}
