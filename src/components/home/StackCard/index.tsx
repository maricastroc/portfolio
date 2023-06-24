import { StackCardContainer } from './styles'

interface StackCardProps {
  image: string
  stack: string
  definition: string | undefined
  onSetDescription: (definition: string) => void
}

export function StackCard({
  image,
  definition,
  onSetDescription,
}: StackCardProps) {
  function handleSendDescription() {
    definition && onSetDescription(definition)
  }

  function handleClearDescription() {
    onSetDescription('')
  }

  return (
    <StackCardContainer
      onMouseOver={handleSendDescription}
      onMouseOut={handleClearDescription}
    >
      <img src={`./assets/stacks/${image}.svg`} alt="" />
    </StackCardContainer>
  )
}
