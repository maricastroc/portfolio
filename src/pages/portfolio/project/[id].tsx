import {
  ControlBorderSeparator,
  ControlSeparator,
  ControlText,
  ControlsContainer,
  ControlsSection,
  DescriptionSection,
  DescriptionText,
  DetailsSection,
  ImageHeaderContainer,
  ImagesPreviewContainer,
  IntroSection,
  MainSection,
  NextSection,
  PrevSection,
  PreviewSection,
  ProjectContainer,
  ProjectContent,
  ProjectInfo,
  Separator,
  TextProjectInfo,
  ToolsSection,
} from '@/styles/pages/project'
import { useRouter } from 'next/router'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { projectsDetails } from '../../../utils/projectsDetails'
import Link from 'next/link'

export default function ProjectDetails() {
  const router = useRouter()
  const { id } = router.query

  const actualId = parseFloat(id as string)

  const projectToShow = projectsDetails[actualId]

  const previousProjectName = projectsDetails[actualId - 1]?.title
  const nextProjectName = projectsDetails[actualId + 1]?.title

  return (
    projectToShow && (
      <ProjectContainer>
        <ImageHeaderContainer>
          <img src={projectToShow.images[0].first} alt="" />
        </ImageHeaderContainer>
        <ProjectContent>
          <IntroSection>
            <Separator />
            <ProjectInfo>
              <TextProjectInfo>
                <h2>{projectToShow.title}</h2>
                <p>{projectToShow.summary}</p>
              </TextProjectInfo>
              <DetailsSection>
                <p>{projectToShow.categories}</p>
                <p>HTML / CSS / JS</p>
                <button>
                  <a href={projectToShow.preview}>VISIT WEBSITE</a>
                </button>
              </DetailsSection>
            </ProjectInfo>
            <Separator />
          </IntroSection>
          <MainSection>
            <DescriptionSection>
              <DescriptionText>
                <h2>Project Background</h2>
                <p>{projectToShow.details}</p>
              </DescriptionText>
              <ToolsSection>
                <h2>Build with:</h2>
                {projectToShow.tools?.map((tool: string, index: number) => {
                  return (
                    <p key={index}>
                      <span> {'>'} </span>
                      {tool}
                    </p>
                  )
                })}
              </ToolsSection>
            </DescriptionSection>
            <Separator />
            <PreviewSection>
              <h2>Static Previews</h2>
              <span></span>
              <ImagesPreviewContainer>
                <img src={projectToShow.images[0].second} alt="" />
                <img src={projectToShow.images[0].third} alt="" />
              </ImagesPreviewContainer>
            </PreviewSection>
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
                      <h2>{previousProjectName}</h2>
                      <p>Previous Project</p>
                    </ControlText>
                  </>
                ) : (
                  ''
                )}
              </PrevSection>
            </Link>
            {actualId < 8 && actualId !== 0 ? <ControlSeparator /> : null}
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
                      <h2>{nextProjectName}</h2>
                      <p>Next Project</p>
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
