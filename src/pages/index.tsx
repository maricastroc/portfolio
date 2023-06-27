import { HomeContainer, Separator } from '@/styles/pages/home'
import { IntroSection } from '@/components/home/IntroSection'
import { AboutMeSection } from '@/components/home/AboutMeSection'
import { StacksSection } from '@/components/home/StacksSection'
import { ContactMeSection } from '@/components/ContactMeSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>Home</Head>
      <HomeContainer>
        <IntroSection />
        <Separator />
        <AboutMeSection />
        <Separator />
        <StacksSection />
        <Separator />
        <ContactMeSection />
      </HomeContainer>
    </>
  )
}
