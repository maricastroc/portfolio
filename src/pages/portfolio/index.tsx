import { PortfolioContainer } from '@/styles/pages/portfolio'
import { projectsResume } from '../../utils/projectsResume'
import {
  ProjectCard,
  ProjectCardProps,
} from '@/components/portfolio/ProjectCard'

export default function Portfolio() {
  return (
    <PortfolioContainer>
      {projectsResume.map((project: ProjectCardProps) => {
        return (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            position={project.position}
          />
        )
      })}
    </PortfolioContainer>
  )
}
