import { styled } from '@/styles'

export const PortfolioContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '2rem',
  gap: '5rem',

  '@media (min-width: 768px)': {
    padding: '2.5rem',
  },

  '@media (min-width: 980px)': {
    gap: '7rem',
  },
})
