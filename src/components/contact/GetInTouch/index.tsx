import {
  GetInTouchContainer,
  GetInTouchContent,
  IconsContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

export function GetInTouch() {
  return (
    <GetInTouchContainer>
      <h2>Get In Touch</h2>
      <GetInTouchContent>
        <p>
          I&apos;d love to hear about what you&apos;re working on and how I
          could help. I&apos;m currently looking for a new role and am open to a
          wide range of opportunities. My preference would be to find a position
          in a company in London. But I&apos;m also happy to hear about
          opportunites that don&apos;t fit that description. I&apos;m a
          hard-working and positive person who will always approach each task
          with a sense of purpose and attention to detail. Please do feel free
          to check out my online profiles below and get in touch using the form.
        </p>
        <IconsContainer>
          <a
            href="https://github.com/maricastroc"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/maricastroc"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/mariana-castro-297586264/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </IconsContainer>
      </GetInTouchContent>
    </GetInTouchContainer>
  )
}
