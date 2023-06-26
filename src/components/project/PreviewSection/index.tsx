import { useTranslation } from 'react-i18next'
import { ImagesPreviewContainer, PreviewSectionContainer } from './styles'

interface PreviewSectionProps {
  imageUrlSecond: string
  imageUrlThird: string
}

export function PreviewSection({
  imageUrlSecond,
  imageUrlThird,
}: PreviewSectionProps) {
  const { t } = useTranslation()

  return (
    <PreviewSectionContainer>
      <h2>{t('static_previews')}</h2>
      <span></span>
      <ImagesPreviewContainer>
        <img src={imageUrlSecond} alt="" />
        <img src={imageUrlThird} alt="" />
      </ImagesPreviewContainer>
    </PreviewSectionContainer>
  )
}
