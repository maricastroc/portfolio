import { styled } from '@/styles'

export const PortfolioContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  gap: '5rem',

  img: {
    width: '100%',
    backgroundColor: '$gray800',
    borderRadius: '8px',
  },
})
