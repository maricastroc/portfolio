import { useTranslation } from 'react-i18next'
import { ContactMeSectionContainer } from './styles'
import Link from 'next/link'

export function ContactMeSection() {
  const { t } = useTranslation()

  return (
    <ContactMeSectionContainer>
      <h2>{t('project_together')}</h2>
      <span></span>
      <Link href="/contact">
        <button>{t('contact_me')}</button>
      </Link>
    </ContactMeSectionContainer>
  )
}
