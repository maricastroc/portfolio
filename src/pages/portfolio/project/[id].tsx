import {
  ControlBorderSeparator,
  ControlSeparator,
  ControlText,
  ControlsContainer,
  ControlsSection,
  DescriptionSection,
  DescriptionText,
  DetailsSection,
  ImageHeaderContainer,
  ImagesPreviewContainer,
  IntroSection,
  MainSection,
  NextSection,
  PrevSection,
  PreviewSection,
  ProjectContainer,
  ProjectContent,
  ProjectInfo,
  Separator,
  TextProjectInfo,
  ToolsSection,
} from '@/styles/pages/project'
import { useRouter } from 'next/router'
import { CaretLeft, CaretRight } from 'phosphor-react'

export default function ProjectDetails() {
  const router = useRouter()
  const { id } = router.query

  console.log(id)
  return (
    <ProjectContainer>
      <ImageHeaderContainer>
        <img
          className="imgHeader"
          src="/assets/coffee_delivery/img_1.png"
          alt=""
        />
      </ImageHeaderContainer>
      <ProjectContent>
        <IntroSection>
          <Separator />
          <ProjectInfo>
            <TextProjectInfo>
              <h2>Coffee Delivery</h2>
              <p>
                Overall, the project aimed to provide a user-friendly interface
                for managing the shopping cart of a fictional coffee shop,
                allowing customers to easily select and track their desired
                items, as well as providing a convenient way to calculate the
                total value of their purchase.
              </p>
            </TextProjectInfo>
            <DetailsSection>
              <p>Interaction Design / Front End Development</p>
              <p>HTML / CSS / JS</p>
              <button>VISIT WEBSITE</button>
            </DetailsSection>
          </ProjectInfo>
          <Separator />
        </IntroSection>
        <MainSection>
          <DescriptionSection>
            <DescriptionText>
              <h2>Project Background</h2>
              <p>
                I had the opportunity to practice working with styled-components,
                contexts, reducers, immer, routing with React Router DOM, React
                Hook Form, and hookform/resolvers for form validation using zod.
                Additionally, I worked with hooks like useDebounce and useMemo. I
                even created my own useLocation hook using the Geolocation API, in
                order to get user&apos;s location.
              </p>
            </DescriptionText>
            <ToolsSection>
              <h2>Build with:</h2>
              <p>
                <span> {'>'} </span>
                Typescript
              </p>
              <p>
                <span> {'>'} </span>
                Next.Js
              </p>
              <p>
                <span> {'>'} </span>
                Stripe API
              </p>
              <p>
                <span> {'>'} </span>
                Stitches
              </p>
              <p>
                <span> {'>'} </span>
                keen-slider
              </p>
              <p>
                <span> {'>'} </span>
                font-awesome
              </p>
              <p>
                <span> {'>'} </span>
                lottie-react
              </p>
              <p>
                <span> {'>'} </span>
                radix-ui
              </p>
              <p>
                <span> {'>'} </span>
                geolocation API
              </p>
              <p>
                <span> {'>'} </span>
                ESLint
              </p>
              <p>
                <span> {'>'} </span>
                Prettier
              </p>
            </ToolsSection>
          </DescriptionSection>
          <Separator />
          <PreviewSection>
            <h2>Static Previews</h2>
            <span></span>
            <ImagesPreviewContainer>
              <img src="/assets/coffee_delivery/img_2.png" alt="" />
              <img src="/assets/coffee_delivery/img_3.png" alt="" />
            </ImagesPreviewContainer>
          </PreviewSection>
        </MainSection>
      </ProjectContent>
      <ControlsContainer>
        <ControlBorderSeparator />
        <ControlsSection>
          <PrevSection>
            <CaretLeft size={32} />
            <ControlText>
              <h2>Bookmark</h2>
              <p>Previous Project</p>
            </ControlText>
          </PrevSection>
          <ControlSeparator />
          <NextSection>
            <CaretRight size={32} />
            <ControlText>
              <h2>Bookmark</h2>
              <p>Previous Project</p>
            </ControlText>
          </NextSection>
        </ControlsSection>
        <ControlBorderSeparator />
      </ControlsContainer>
    </ProjectContainer>
  )
}
