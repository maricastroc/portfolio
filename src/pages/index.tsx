import { HomeContainer, Separator } from '@/styles/pages/home'
import { IntroSection } from '@/components/home/IntroSection'
import { AboutMeSection } from '@/components/home/AboutMeSection'
import { StacksSection } from '@/components/home/StacksSection'

export default function Home() {
  return (
    <HomeContainer>
      <IntroSection />
      <Separator />
      <AboutMeSection />
      <Separator />
      <StacksSection />
      <Separator />
    </HomeContainer>
  )
}
