import { styled } from '@/styles'

export const ImageHeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto 2rem',
  backgroundColor: '$gray800',
  borderRadius: '8px',
  padding: '0.5rem',

  img: {
    backgroundColor: '$gray800',
    borderRadius: '8px',
    width: 'clamp(230px, 75vw, 40rem)',
    height: 'auto',
  },

  '@media (min-width: 680px)': {
    margin: '0 auto 1.5rem',

    img: {
      width: 'clamp(240px, 80vw, 45rem)',
    },
  },

  '@media (min-width: 1200px)': {
    img: {
      width: 'clamp(240px, 80vw, 60rem)',
    },
  },
})
