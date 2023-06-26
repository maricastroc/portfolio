import { ImageHeaderContainer } from './styles'

interface ImageHeaderProps {
  imageUrl: string
}

export function ImageHeader({ imageUrl }: ImageHeaderProps) {
  return (
    <ImageHeaderContainer>
      <img src={imageUrl} alt="" />
    </ImageHeaderContainer>
  )
}
