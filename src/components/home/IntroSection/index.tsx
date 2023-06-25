import { useTranslation } from 'react-i18next'
import { AboutButton } from '../AboutButton'
import { Typewriter } from 'react-simple-typewriter'
import {
  HeadingContainer,
  ProfileContainer,
  TextContainer,
  TextContent,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '@/contexts/portfolioContext'

export function IntroSection() {
  const { t } = useTranslation()
  const { language } = useContext(PortfolioContext)

  const [isTypewriterVisible, setIsTypewriterVisible] = useState(false)

  useEffect(() => {
    setIsTypewriterVisible(false)

    setTimeout(() => {
      setIsTypewriterVisible(true)
    }, 100)
  }, [language])

  return (
    <HeadingContainer>
      <ProfileContainer>
        <img src="./assets/profile.jpg" alt="" />
      </ProfileContainer>
      <TextContainer>
        <TextContent>
          <p>
            {isTypewriterVisible && (
              <Typewriter words={[t('title')]} loop={1} typeSpeed={10} />
            )}
          </p>
          <h2>
            {isTypewriterVisible && (
              <Typewriter words={['Mariana Castro']} loop={1} typeSpeed={80} />
            )}
          </h2>
          <h3>
            {isTypewriterVisible && (
              <Typewriter words={[t('subtitle')]} loop={1} typeSpeed={50} />
            )}
          </h3>
        </TextContent>
        <AboutButton />
      </TextContainer>
    </HeadingContainer>
  )
}
