import { styled } from '..'

export const ContactContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 2rem 6rem',
  maxWidth: '35rem',

  '@media (min-width: 1024px)': {
    maxWidth: '60rem',
  },
})

export const Separator = styled('span', {
  width: '100%',
  height: '1px',
  backgroundColor: '$gray700',
  margin: '2.5rem 0',
})
