import { PortfolioContainer } from '@/styles/pages/portfolio'
import { projectsResumeEN } from '../../utils/projectsResumeEN'
import { projectsResumePT } from '@/utils/projectsResumePT'
import {
  ProjectCard,
  ProjectCardProps,
} from '@/components/portfolio/ProjectCard'
import { PortfolioContext } from '@/contexts/portfolioContext'
import { useContext, useEffect, useState } from 'react'
import { ContactMeSection } from '@/components/ContactMeSection'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

export default function Portfolio() {
  const { t } = useTranslation()
  const { language } = useContext(PortfolioContext)
  const [projectsResume, setProjectsResume] = useState(projectsResumeEN)

  useEffect(() => {
    language === 'en'
      ? setProjectsResume(projectsResumeEN)
      : setProjectsResume(projectsResumePT)
  }, [language])

  return (
    projectsResume && (
      <>
        <Head>
          <title> {t('portfolio')}</title>
        </Head>
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
          <ContactMeSection />
        </PortfolioContainer>
      </>
    )
  )
}
