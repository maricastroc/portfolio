declare module 'react-typewriter' {
  import { FC } from 'react'

  interface TypewriterProps {
    children: string
    [key: string]: any
  }

  const Typewriter: FC<TypewriterProps>

  export default Typewriter
}
