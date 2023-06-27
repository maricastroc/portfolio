import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, Subtitle, Title } from './styles'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export function SuccessModal() {
  const { t } = useTranslation()

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>{t('thank_you')}</Title>
        <Subtitle>
          <p>{t('success_message')}</p>
        </Subtitle>
        <Link href="/">
          <CloseButton>{t('back_to_home')}</CloseButton>
        </Link>
      </Content>
    </Dialog.Portal>
  )
}
