import {
  ProjectCardButton,
  ProjectCardContainer,
  Separator,
  TextContent,
} from './styles'

export interface ProjectCardProps {
  id: number
  title: string
  description: string
  imageUrl: string
  position: string
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  position,
}: ProjectCardProps) {
  return (
    <ProjectCardContainer className={position === 'left' ? 'left' : 'right'}>
      <img src={imageUrl} alt="" />
      <Separator />
      <TextContent>
        <span></span>
        <h2>{title}</h2>
        <p>{description}</p>
        <ProjectCardButton>VIEW PROJECT</ProjectCardButton>
        <span></span>
      </TextContent>
      <Separator />
    </ProjectCardContainer>
  )
}
