import { styled } from '@/styles'

export const StackCardContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$gray800',
  padding: '1.8rem',
  borderRadius: '8px',
  border: 'solid 2px $gray700',
  transition: 'ease-in-out 200ms',

  img: {
    color: '$cyan300',
    width: '55px',
  },

  '&:hover': {
    scale: 1.1,
    border: 'solid 1px rgba(5, 216, 216, 1)',
  },

  '@media (min-width: 360px)': {
    padding: '2rem',

    img: {
      width: '60px',
    },
  },

  '@media (min-width: 768px)': {
    padding: '2rem',

    img: {
      width: '60px',
    },
  },
})
