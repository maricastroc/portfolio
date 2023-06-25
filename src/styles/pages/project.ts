import { styled } from '@/styles'

export const ProjectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '2rem',
  gap: '3rem',

  '@media (min-width: 768px)': {
    padding: '2.5rem',
  },

  '@media (min-width: 980px)': {
    gap: '7rem',
  },

  img: {
    backgroundColor: '$gray800',
    padding: '1.5rem 0',
    width: '311px',
    height: 'auto',
  },

  '& .imgHeader': {
    width: '311px',
    height: 'auto',
  },
})
