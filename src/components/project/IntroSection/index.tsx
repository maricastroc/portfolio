import {
  DetailsSection,
  IntroSectionContainer,
  ProjectInfo,
  Separator,
  TextProjectInfo,
  WebsiteButton,
} from './styles'

interface IntroSectionProps {
  title: string
  summary: string
  categories: string[]
  preview: string | undefined
  languages: string[]
}

export default function IntroSection({
  title,
  summary,
  categories,
  languages,
  preview,
}: IntroSectionProps) {
  return (
    <IntroSectionContainer>
      <Separator />
      <ProjectInfo>
        <TextProjectInfo>
          <h2>{title}</h2>
          <p>{summary}</p>
        </TextProjectInfo>
        <DetailsSection>
          <p>{categories.join(' / ')}</p>
          <p>{languages.join(' / ')}</p>
          <WebsiteButton>
            <a href={preview}>VISIT WEBSITE</a>
          </WebsiteButton>
        </DetailsSection>
      </ProjectInfo>
      <Separator />
    </IntroSectionContainer>
  )
}
