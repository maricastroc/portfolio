import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import {
  AboutStackContainer,
  Heading,
  StacksIconsContainer,
  StacksSectionContainer,
  StacksSectionHeader,
} from './styles'
import { StackCard } from '../StackCard'
import { stacksPT, stacksEN } from '@/utils/stacksDefinition'
import { useContext, useState } from 'react'
import { PortfolioContext } from '@/contexts/shopList'

const stacks = [
  'html',
  'css',
  'javascript',
  'typescript',
  'sass',
  'react',
  'next',
  'tailwindcss',
  'styledComponents',
  'stitches',
  'bootstrap',
  'figma',
]

export function StacksSection() {
  const { t } = useTranslation()
  const { language } = useContext(PortfolioContext)
  const [textToRender, setTextToRender] = useState(t('stack_definition'))
  const [didUserTyped, setDidUserTyped] = useState(false)

  function handleSetDescription(definition: string) {
    if (definition !== '') {
      setTextToRender(definition)
      setDidUserTyped(true)
    } else {
      setTextToRender(t('stack_definition'))
      setDidUserTyped(false)
    }
  }

  return (
    <StacksSectionContainer>
      <StacksSectionHeader>
        <Heading>
          <FontAwesomeIcon icon={faTerminal} />
          <h2 className="aboutMe">{t('abilities')}</h2>
        </Heading>
        <AboutStackContainer className={didUserTyped ? 'active' : ''}>
          {textToRender && <p>{textToRender}</p>}
        </AboutStackContainer>
      </StacksSectionHeader>
      <StacksIconsContainer>
        {language === 'pt'
          ? stacks.map((stack, index) => {
              const stackObject = stacksPT.find((item) =>
                Object.hasOwnProperty.call(item, stack),
              )
              const description = stackObject
                ? stackObject[stack as keyof typeof stackObject]
                : ''
              return (
                <StackCard
                  key={index}
                  image={stack}
                  stack={stack}
                  definition={description}
                  onSetDescription={handleSetDescription}
                />
              )
            })
          : stacks.map((stack, index) => {
              const stackObject = stacksEN.find((item) =>
                Object.hasOwnProperty.call(item, stack),
              )
              const description = stackObject
                ? stackObject[stack as keyof typeof stackObject]
                : ''
              return (
                <StackCard
                  key={index}
                  image={stack}
                  stack={stack}
                  definition={description}
                  onSetDescription={handleSetDescription}
                />
              )
            })}
      </StacksIconsContainer>
    </StacksSectionContainer>
  )
}
