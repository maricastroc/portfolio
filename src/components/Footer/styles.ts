import { styled } from '@/styles'

export const FooterContainer = styled('section', {
  display: 'flex',
  minWidth: '100%',
  backgroundColor: '$gray800',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FooterContent = styled('section', {
  padding: '2.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
  width: '100%',

  h2: {
    color: '$gray300',
    fontWeight: 900,
    fontSize: '1.3rem',
    textAlign: 'center',
  },

  '@media (min-width: 680px)': {
    padding: '1.5rem 2.5rem',
    flexDirection: 'row',
    justifyContent: 'space-between',

    h2: {
      fontSize: '1.6rem',
    },
  },

  '@media (min-width: 768px)': {
    padding: '1.5rem 3rem',
  },
})

export const TextContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.5rem',

  '@media (min-width: 680px)': {
    flexDirection: 'row',
    gap: '4rem',
  },
})

export const PagesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  textTransform: 'uppercase',

  p: {
    cursor: 'pointer',
    fontFamily: 'Space Mono, monospace',
    color: '$gray300',
    fontSize: '0.75rem',
    letterSpacing: '1px',

    '&:hover': {
      color: '$cyan300',
    },
  },

  '@media (min-width: 680px)': {
    flexDirection: 'row',
  },
})

export const IconsContainer = styled('section', {
  display: 'flex',
  gap: '0.95rem',
  alignItems: 'center',

  svg: {
    fontSize: '1.57rem',
  },

  '@media (min-width: 680px)': {
    gap: '1.5rem',
  },
})
