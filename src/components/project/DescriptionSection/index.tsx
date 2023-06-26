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
  return (
    <DescriptionSectionContainer>
      <DescriptionText>
        <h2>Project Background</h2>
        <p>{details}</p>
      </DescriptionText>
      <ToolsSection>
        <h2>Build with:</h2>
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
