import { styled } from '@/styles'

export const StacksSectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '2rem',
  width: '100%',

  '@media (min-width: 1024px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '70rem',
  },
})

export const AboutStackContainer = styled('div', {
  display: 'none',
  marginTop: '3rem',
  backgroundColor: '$gray800',
  borderRadius: '12px',
  padding: '1.5rem',
  width: '20rem',
  lineHeight: '1.8rem',

  '&.active': {
    border: 'solid 1px $cyan300',
  },

  p: {
    color: '$gray300',
  },

  '@media (min-width: 1024px)': {
    display: 'flex',
  },
})

export const StacksSectionHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
})

export const Heading = styled('div', {
  display: 'flex',
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

export const StacksIconsContainer = styled('div', {
  margin: '5rem auto 0',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.2rem',

  '@media (min-width: 360px)': {
    gap: '1.5rem',
  },

  '@media (min-width: 615px)': {
    backgroundColor: 'transparent',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1.5rem',
  },

  '@media (min-width: 768px)': {
    backgroundColor: 'transparent',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '1.5rem',
  },

  '@media (min-width: 1024px)': {
    marginTop: '2rem',
  },
})
