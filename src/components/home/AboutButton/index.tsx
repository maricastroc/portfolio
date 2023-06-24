import { AboutButtonContainer, ButtonContainer, IconContainer } from './styles'
import { CaretDown } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

export function AboutButton() {
  const { t } = useTranslation()

  return (
    <AboutButtonContainer>
      <IconContainer>
        <CaretDown size={16} />
      </IconContainer>
      <Link
        activeClass="active"
        to="aboutMe"
        spy={true}
        smooth={true}
        offset={-180}
        duration={300}
      >
        <ButtonContainer>
          <p>{t('about_me')}</p>
        </ButtonContainer>
      </Link>
    </AboutButtonContainer>
  )
}
