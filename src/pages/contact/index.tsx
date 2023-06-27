import { ContactMe } from '@/components/contact/ContactMe'
import { GetInTouch } from '@/components/contact/GetInTouch'
import { ContactContainer, Separator } from '@/styles/pages/contact'

export default function Contact() {
  return (
    <ContactContainer>
      <Separator />
      <GetInTouch />
      <Separator />
      <ContactMe />
    </ContactContainer>
  )
}
