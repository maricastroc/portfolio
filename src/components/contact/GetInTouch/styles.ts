import { styled } from '@/styles'

export const GetInTouchContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  gap: '1.5rem',

  h2: {
    fontSize: '2.2rem',
    color: '$gray300',
  },

  '@media (min-width: 1024px)': {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
})

export const GetInTouchContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  gap: '1.5rem',

  p: {
    fontSize: '0.93rem',
    lineHeight: '1.8rem',
    color: '$gray300',
  },

  '@media (min-width: 1024px)': {
    maxWidth: '50%',

    p: {
      fontSize: '1rem',
      lineHeight: '1.9rem',
    },
  },
})

export const IconsContainer = styled('div', {
  marginTop: '1rem',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',

  svg: {
    color: '$gray300',
    fontSize: '24px',
  },
})
