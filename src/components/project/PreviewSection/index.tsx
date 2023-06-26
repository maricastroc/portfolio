import { ImagesPreviewContainer, PreviewSectionContainer } from './styles'

interface PreviewSectionProps {
  imageUrlSecond: string
  imageUrlThird: string
}

export function PreviewSection({
  imageUrlSecond,
  imageUrlThird,
}: PreviewSectionProps) {
  return (
    <PreviewSectionContainer>
      <h2>Static Previews</h2>
      <span></span>
      <ImagesPreviewContainer>
        <img src={imageUrlSecond} alt="" />
        <img src={imageUrlThird} alt="" />
      </ImagesPreviewContainer>
    </PreviewSectionContainer>
  )
}
