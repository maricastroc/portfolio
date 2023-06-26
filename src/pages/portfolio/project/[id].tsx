import {
  ControlBorderSeparator,
  ControlText,
  ControlsContainer,
  ControlsSection,
  MainSection,
  NextSection,
  PrevSection,
  ProjectContainer,
  ProjectContent,
  Separator,
} from '@/styles/pages/project'
import { useRouter } from 'next/router'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { projectsDetailsEN } from '../../../utils/projectsDetailsEN'
import { projectsDetailsPT } from '../../../utils/projectDetailsPT'
import Link from 'next/link'
import IntroSection from '@/components/project/IntroSection'
import { ImageHeader } from '@/components/project/ImageHeader'
import { DescriptionSection } from '@/components/project/DescriptionSection'
import { PreviewSection } from '@/components/project/PreviewSection'
import { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '@/contexts/portfolioContext'
import { useTranslation } from 'react-i18next'

export default function ProjectDetails() {
  const { t } = useTranslation()
  const router = useRouter()
  const [projectToShow, setProjectToShow] = useState<any>()
  const { language } = useContext(PortfolioContext)
  const { id } = router.query

  const actualId = parseFloat(id as string)

  useEffect(() => {
    language === 'en'
      ? setProjectToShow(projectsDetailsEN[actualId])
      : setProjectToShow(projectsDetailsPT[actualId])
  }, [language, actualId])

  const previousProjectName = projectsDetailsEN[actualId - 1]?.title
  const nextProjectName = projectsDetailsEN[actualId + 1]?.title

  return (
    projectToShow && (
      <ProjectContainer>
        <ImageHeader imageUrl={projectToShow.images[0].first} />
        <ProjectContent>
          <IntroSection
            title={projectToShow.title}
            summary={projectToShow.summary}
            categories={projectToShow.categories}
            preview={projectToShow.preview}
            languages={projectToShow.languages}
          />
          <MainSection>
            <DescriptionSection
              details={projectToShow.details}
              tools={projectToShow.tools}
            />
            <Separator />
            <PreviewSection
              imageUrlSecond={projectToShow.images[0].second}
              imageUrlThird={projectToShow.images[0].third}
            />
          </MainSection>
        </ProjectContent>
        <ControlsContainer>
          <ControlBorderSeparator />
          <ControlsSection>
            <Link
              href="/portfolio/project/[id]"
              as={`/portfolio/project/${actualId - 1}`}
              prefetch={false}
            >
              <PrevSection>
                {actualId > 0 ? (
                  <>
                    <CaretLeft size={32} />
                    <ControlText>
                      <p>{t('previous_project')}</p>
                      <h2>{previousProjectName}</h2>
                    </ControlText>
                  </>
                ) : (
                  ''
                )}
              </PrevSection>
            </Link>
            <Link
              href="/portfolio/project/[id]"
              as={`/portfolio/project/${actualId + 1}`}
              prefetch={false}
            >
              <NextSection>
                {actualId < 8 ? (
                  <>
                    <CaretRight size={32} />
                    <ControlText>
                      <p>{t('next_project')}</p>
                      <h2>{nextProjectName}</h2>
                    </ControlText>
                  </>
                ) : (
                  ''
                )}
              </NextSection>
            </Link>
          </ControlsSection>
          <ControlBorderSeparator />
        </ControlsContainer>
      </ProjectContainer>
    )
  )
}
