import Link from 'next/link'
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
  id,
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
        <Link href={`portfolio/project/${id}`} key={id} prefetch={false}>
          <ProjectCardButton>VIEW PROJECT</ProjectCardButton>
        </Link>
        <span></span>
      </TextContent>
      <Separator />
    </ProjectCardContainer>
  )
}
