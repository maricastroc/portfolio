import { styled } from '@/styles'

export const IntroSectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '@media (min-width: 680px)': {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export const ProjectInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',
  margin: '3rem 0',

  '@media (min-width: 680px)': {
    maxWidth: '45rem',
    margin: '0 auto',
  },

  '@media (min-width: 1200px)': {
    minWidth: '60rem',
    margin: '3rem 0',
  },
})

export const TextProjectInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',

  h2: {
    fontSize: '2.2rem',
    color: '$gray300',
  },

  p: {
    marginTop: '1.5rem',
    fontSize: '0.93rem',
    color: '$gray300',
    lineHeight: '1.85rem',
    marginBottom: '3.375rem',
  },

  '@media (min-width: 680px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '45rem',
    margin: '3rem auto 0',

    p: {
      maxWidth: '50%',
      marginTop: '0.8rem',
      marginBottom: 0,
      backgroundColor: '$gray800',
      padding: '1.5rem',
      borderRadius: '8px',
    },
  },

  '@media (min-width: 1200px)': {
    minWidth: '60rem',
    margin: '0 auto',

    h2: {
      fontSize: '2.4rem',
    },

    p: {
      maxWidth: '60%',
    },
  },
})

export const DetailsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '0.85rem',
    fontWeight: 600,
    lineHeight: '1.8rem',
    color: '$cyan300',
  },

  a: {
    color: '$cyan300',
  },

  '@media (min-width: 680px)': {
    marginTop: '-9rem',
    marginBottom: '2rem',
  },

  '@media (min-width: 1200px)': {
    marginTop: '-6rem',
  },
})

export const WebsiteButton = styled('button', {
  cursor: 'pointer',
  marginTop: '2rem',
  padding: '0.75rem 1.8rem',
  backgroundColor: 'transparent',
  border: '2px solid $cyan300',
  color: '$cyan300',
  fontFamily: 'Space Mono, monospace',
  textTransform: 'uppercase',
  width: '11.1rem',

  '&:hover': {
    backgroundColor: '$cyan700',
    border: '2px solid $cyan700',
    transition: '200ms',

    a: {
      color: '$white',
    },
  },
})

export const Separator = styled('span', {
  width: '100%',
  height: '1.5px',
  backgroundColor: '$gray700',

  '@media (min-width: 680px)': {
    marginTop: '2.5rem',
  },
})
