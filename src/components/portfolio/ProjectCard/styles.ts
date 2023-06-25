import { styled } from '@/styles'

export const ProjectCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '25rem',

  img: {
    width: '100%',
    backgroundColor: '$gray900',
    border: 'solid 2px $cyan700',
    borderRadius: '8px',
    marginBottom: '2rem',
  },

  '@media (min-width: 768px)': {
    maxWidth: '50rem',
    gap: '4.4rem',

    '&.left': {
      flexDirection: 'row',
    },

    '&.right': {
      flexDirection: 'row-reverse',
    },

    img: {
      maxWidth: '20rem',
    },
  },

  '@media (min-width: 1024px)': {
    minWidth: '55rem',
    justifyContent: 'space-between',

    '&.left': {
      flexDirection: 'row',
    },

    '&.right': {
      flexDirection: 'row-reverse',
    },

    img: {
      border: 'solid 2px $gray700',
      maxWidth: '29rem',
    },
  },

  '@media (min-width: 1440px)': {
    minWidth: '63rem',
  },
})

export const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    marginTop: '1.5rem',
    fontSize: '1.8rem',
    lineHeight: '2.2rem',
    color: '$gray300',
  },

  p: {
    marginTop: '1.5rem',
    fontSize: '0.9rem',
    lineHeight: '1.7rem',
    color: '$gray300',
  },

  '@media (min-width: 768px)': {
    maxWidth: '25rem',

    h2: {
      marginTop: '2.5rem',
    },

    p: {
      fontSize: '0.95rem',
      lineHeight: '1.8rem',
    },

    span: {
      width: '100%',
      height: '1px',
      backgroundColor: '$gray800',
    },
  },

  '@media (min-width: 1024px)': {
    width: 'auto',
  },
})

export const ProjectCardButton = styled('button', {
  cursor: 'pointer',
  marginTop: '2rem',
  padding: '0.7rem 1.7rem',
  backgroundColor: 'transparent',
  border: '2px solid $cyan300',
  color: '$cyan300',
  fontFamily: 'Space Mono, monospace',
  textTransform: 'uppercase',
  marginBottom: '1.5rem',

  '&:hover': {
    backgroundColor: '$cyan700',
    color: '$white',
    border: '2px solid $cyan700',
    transition: '200ms',
  },

  '@media (min-width: 768px)': {
    marginBottom: '2.5rem',
    width: '10.5rem',
  },
})

export const Separator = styled('span', {
  display: 'block',
  width: '100%',
  height: '1px',
  backgroundColor: '$gray800',

  '@media (min-width: 768px)': {
    display: 'none',
    width: '50%',
  },
})
