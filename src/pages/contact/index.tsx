import { ContactMe } from '@/components/contact/ContactMe'
import { GetInTouch } from '@/components/contact/GetInTouch'
import { ContactContainer, Separator } from '@/styles/pages/contact'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('contact')}</title>
      </Head>
      <ContactContainer>
        <Separator />
        <GetInTouch />
        <Separator />
        <ContactMe />
      </ContactContainer>
    </>
  )
}
