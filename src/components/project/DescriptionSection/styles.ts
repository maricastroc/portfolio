import { styled } from '@/styles'

export const DescriptionSectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '2.5rem 0',

  '@media (min-width: 680px)': {
    maxWidth: '45rem',
  },

  '@media (min-width: 1200px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '60rem',
    gap: '4rem',
  },
})

export const DescriptionText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',

  h2: {
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '$gray300',
  },

  '> p': {
    marginTop: '1.75rem',
    fontSize: '0.93rem',
    color: '$gray300',
    lineHeight: '1.85rem',
  },

  '@media (min-width: 680px)': {
    h2: {
      fontSize: '2rem',
    },

    '> p': {
      backgroundColor: '$gray800',
      padding: '1.5rem',
      borderRadius: '8px',
    },
  },

  '@media (min-width: 1200px)': {
    width: '50%',

    '> p': {
      backgroundColor: '$gray800',
      padding: '1.5rem',
      borderRadius: '8px',
    },
  },
})

export const ToolsSection = styled('div', {
  display: 'none',

  '@media (min-width: 1200px)': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '2px solid $gray700',
    width: '40%',

    h2: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      fontWeight: 600,
      color: '$gray300',
    },

    span: {
      fontFamily: 'Space Mono, monospace',
      color: '$gray400',
      fontWeight: 600,
    },

    p: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '0.95rem',
      color: '$cyan300',
      marginTop: '0.6rem',
    },
  },
})
