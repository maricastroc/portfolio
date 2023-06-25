import {
  DescriptionSection,
  DetailsSection,
  ImageHeaderContainer,
  ImagesPreviewContainer,
  IntroSection,
  PreviewSection,
  ProjectContainer,
  ProjectInfo,
  Separator,
} from '@/styles/pages/project'
import { useRouter } from 'next/router'

export default function ProjectDetails() {
  const router = useRouter()
  const { id } = router.query

  console.log(id)
  return (
    <ProjectContainer>
      <IntroSection>
        <ImageHeaderContainer>
          <img
            className="imgHeader"
            src="/assets/coffee_delivery/img_1.png"
            alt=""
          />
        </ImageHeaderContainer>
        <ProjectInfo>
          <span></span>
          <h2>Coffee Delivery</h2>
          <p>
            Overall, the project aimed to provide a user-friendly interface for
            managing the shopping cart of a fictional coffee shop, allowing
            customers to easily select and track their desired items, as well as
            providing a convenient way to calculate the total value of their
            purchase.
          </p>
          <DetailsSection>
            <p>Interaction Design / Front End Development</p>
            <p>HTML / CSS / JS</p>
            <button>VISIT WEBSITE</button>
          </DetailsSection>
        </ProjectInfo>
        <Separator />
      </IntroSection>
      <DescriptionSection>
        <h2>Project Background</h2>
        <p>
          I had the opportunity to practice working with styled-components,
          contexts, reducers, immer, routing with React Router DOM, React Hook
          Form, and hookform/resolvers for form validation using zod.
          Additionally, I worked with hooks like useDebounce and useMemo. I even
          created my own useLocation hook using the Geolocation API, in order to
          get user&apos;s location.
        </p>
      </DescriptionSection>
      <PreviewSection>
        <h2>Static Previews</h2>
        <ImagesPreviewContainer>
          <img src="/assets/coffee_delivery/img_2.png" alt="" />
          <img src="/assets/coffee_delivery/img_3.png" alt="" />
        </ImagesPreviewContainer>
      </PreviewSection>
    </ProjectContainer>
  )
}
