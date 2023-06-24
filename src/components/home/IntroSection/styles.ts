import { styled } from '@/styles'

export const HeadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@media (min-width: 485px)': {
    alignItems: 'flex-start',
    padding: '5rem 3rem',
  },

  '@media (min-width: 1024px)': {
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '5rem 5rem',
    maxWidth: '75rem',
    margin: '0 auto 3rem',
    gap: '4rem',
  },
})

export const ProfileContainer = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(5, 216, 216, 0.4)',
  padding: '0 2rem 4rem',
  minWidth: '100vw',

  img: {
    marginTop: '-6rem',
    width: '15rem',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
  },

  '@media (min-width: 480px)': {
    backgroundColor: '$gray800',
    borderRadius: '8px',
    padding: '2rem',
    marginTop: 0,
    margin: '0 auto',
    width: 'auto',
    minWidth: 'initial',

    img: {
      marginTop: 0,
      width: '18rem',
      height: 'auto',
      boxShadow: 'none',
    },
  },
})

export const TextContainer = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',

  '@media (min-width: 485px)': {
    padding: 0,
    marginTop: '6rem',
  },

  '@media (min-width: 1024px)': {
    marginTop: 0,
    justifyContent: 'space-between',
  },
})

export const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '93%',

  p: {
    fontFamily: 'Space Mono, monospace',
    color: '$cyan300',
    fontSize: '0.9rem',
  },

  h2: {
    marginTop: '1.2rem',
    color: '$gray100',
    fontSize: '2.3rem',
    lineHeight: '2.7rem',
  },

  h3: {
    marginTop: '2rem',
    color: '$gray300',
    fontSize: '1.1rem',
    lineHeight: '1.75rem',
    fontWeight: 600,
  },

  svg: {
    color: '$cyan500',
    marginLeft: '0.5rem',
  },

  '@media (min-width: 1440px)': {
    width: '30rem',

    p: {
      fontFamily: 'Space Mono, monospace',
      color: '$cyan300',
      fontSize: '1.2rem',
    },

    h2: {
      marginTop: '2rem',
      color: '$gray100',
      fontSize: '4rem',
    },

    h3: {
      color: '$gray300',
      fontSize: '1.5rem',
      lineHeight: '2.1rem',
      fontWeight: 600,
    },
  },
})
