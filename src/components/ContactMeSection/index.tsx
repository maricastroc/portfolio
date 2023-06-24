import { useTranslation } from 'react-i18next'
import { ContactMeSectionContainer } from './styles'

export function ContactMeSection() {
  const { t } = useTranslation()

  return (
    <ContactMeSectionContainer>
      <h2>{t('project_together')}</h2>
      <span></span>
      <button>{t('contact_me')}</button>
    </ContactMeSectionContainer>
  )
}
