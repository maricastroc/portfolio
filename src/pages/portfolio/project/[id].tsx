import { ProjectContainer } from '@/styles/pages/project'
import { useRouter } from 'next/router'

export default function ProjectDetails() {
  const router = useRouter()
  const { id } = router.query

  console.log(id)
  return (
    <ProjectContainer>
      <img
        className="imgHeader"
        src="/assets/coffee_delivery/img_1.png"
        alt=""
      />
      <img src="/assets/coffee_delivery/img_2.png" alt="" />
      <img src="/assets/coffee_delivery/img_3.png" alt="" />
    </ProjectContainer>
  )
}
