import { styled } from '@/styles'

export const ContactMeSectionContainer = styled('section', {
  margin: '5rem auto 8rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '3rem',

  h2: {
    fontSize: '2.2rem',
    maxWidth: 'clamp(10rem, 80vw, 20rem)',
    color: '$gray300',
    lineHeight: '2.8rem',
  },

  button: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    padding: '0.9rem 2rem',
    border: '2px solid $cyan300',
    color: '$cyan300',
    backgroundColor: 'transparent',
    fontFamily: 'Space Mono, monospace',

    '&:hover': {
      backgroundColor: '$cyan700',
      color: '$white',
      border: '2px solid $cyan700',
      transition: '200ms',
    },
  },

  '@media (min-width: 680px)': {
    padding: '2rem 4rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
    width: '100%',

    button: {
      minWidth: '10.125rem',
    },

    h2: {
      maxWidth: 'clamp(10rem, 50vw, 20rem)',
    },
  },

  '@media (min-width: 768px)': {
    h2: {
      fontSize: '2.5rem',
      maxWidth: 'clamp(10rem, 80vw, 25rem)',
      lineHeight: '3.3rem',
    },

    span: {
      width: 'clamp(4rem, 30vw, 25rem)',
      height: '1px',
      backgroundColor: '$gray800',
    },
  },

  '@media (min-width: 1024px)': {
    maxWidth: '70rem',
  },
})
