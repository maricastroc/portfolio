import { styled } from '@/styles'

export const AboutMeContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '2rem 2rem 2rem',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '70rem',
  },
})

export const AboutMeHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.2rem',

  h2: {
    color: '$cyan300',
    fontSize: '2rem',
    fontWeight: 900,
    textTransform: 'uppercase',
  },

  svg: {
    marginTop: '0.8rem',
    fontSize: '1.5rem',
    color: '$cyan300',
  },

  '@media (min-width: 768px)': {
    marginTop: '1.5rem',
    gap: '1.2rem',

    h2: {
      fontSize: '2.4rem',
    },

    svg: {
      fontSize: '2rem',
    },
  },

  '@media (min-width: 1024px)': {
    h2: {
      fontSize: '2.8rem',
    },

    svg: {
      fontSize: '2.2rem',
      marginTop: '1rem',
    },
  },
})

export const AboutMeText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  p: {
    marginTop: '1.5rem',
    color: '$gray300',
    lineHeight: '1.8rem',
  },

  '@media (min-width: 768px)': {
    width: '50%',
  },
})

export const PortfolioButton = styled('button', {
  cursor: 'pointer',
  marginTop: '2rem',
  padding: '0.9rem 2rem',
  backgroundColor: 'transparent',
  border: '2px solid $cyan300',
  color: '$cyan300',
  fontFamily: 'Space Mono, monospace',
  textTransform: 'uppercase',

  '&:hover': {
    backgroundColor: '$cyan700',
    color: '$white',
    border: '2px solid $cyan700',
    transition: '200ms',
  },
})
