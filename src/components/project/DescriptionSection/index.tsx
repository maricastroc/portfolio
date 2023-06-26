import { useTranslation } from 'react-i18next'
import {
  DescriptionSectionContainer,
  DescriptionText,
  ToolsSection,
} from './styles'

interface DescriptionSectionProps {
  details: string
  tools: string[]
}

export function DescriptionSection({
  details,
  tools,
}: DescriptionSectionProps) {
  const { t } = useTranslation()

  return (
    <DescriptionSectionContainer>
      <DescriptionText>
        <h2>{t('project_background')}</h2>
        <p>{details}</p>
      </DescriptionText>
      <ToolsSection>
        <h2>{t('build_with')}:</h2>
        {tools?.map((tool: string, index: number) => {
          return (
            <p key={index}>
              <span> {'>'} </span>
              {tool}
            </p>
          )
        })}
      </ToolsSection>
    </DescriptionSectionContainer>
  )
}
