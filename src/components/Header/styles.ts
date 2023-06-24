import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  position: 'sticky',
  top: 0,
  display: 'flex',
  marginBottom: '1.5rem',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '$gray900',

  span: {
    backgroundColor: '$cyan500',
    width: '100%',
    height: '1px',
  },
})

export const HeaderContent = styled('div', {
  position: 'sticky',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '3rem 1rem 1.5rem',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    h2: {
      color: '$gray300',
      fontWeight: 900,
      fontSize: '1.2rem',
    },
  },

  svg: {
    color: '$gray300',
    opacity: 0.9,
  },

  img: {
    width: '4rem',
  },

  '@media (min-width: 768px)': {
    padding: '3rem 3rem 1.5rem',

    img: {
      width: '6rem',
    },

    svg: {
      display: 'none',
    },
  },
})

export const HeaderOptions = styled('div', {
  display: 'none',
  gap: '2.5rem',
  alignItems: 'center',

  p: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    fontFamily: 'Space Mono, monospace',
    color: '$gray300',
    fontSize: '0.75rem',

    '&:hover': {
      color: '$cyan300',
    },
  },

  '& .active': {
    color: '$cyan300',
    cursor: 'default',
  },

  '@media (min-width: 768px)': {
    display: 'flex',
  },
})

export const HeaderItems = styled('div', {
  display: 'flex',
  gap: '2.5rem',
  alignItems: 'center',
})

export const LanguageButton = styled('button', {
  cursor: 'pointer',
  border: 'none',
  padding: '0.2rem 0.5rem',
  borderRadius: '8px',
  backgroundColor: '$gray800',
  color: '$cyan300',
  fontFamily: 'Space Mono, monospace',
  fontSize: '1.05rem',

  '&:hover': {
    backgroundColor: '$cyan700',
    color: '$white',
    transition: 'all 200ms',
  },
})
