import Link from 'next/link'
import {
  ProjectCardButton,
  ProjectCardContainer,
  Separator,
  TextContent,
} from './styles'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <ProjectCardContainer className={position === 'left' ? 'left' : 'right'}>
      <img src={imageUrl} alt="" />
      <Separator />
      <TextContent>
        <span></span>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`portfolio/project/${id}`} key={id} prefetch={false}>
          <ProjectCardButton>{t('view_project')}</ProjectCardButton>
        </Link>
        <span></span>
      </TextContent>
      <Separator />
    </ProjectCardContainer>
  )
}
