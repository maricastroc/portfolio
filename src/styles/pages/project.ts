import { styled } from '@/styles'

export const ProjectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '2rem',

  '@media (min-width: 768px)': {
    padding: '2.5rem',
  },
})

export const ProjectContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Separator = styled('span', {
  width: '100%',
  height: '1.5px',
  backgroundColor: '$gray700',

  '@media (min-width: 680px)': {
    marginTop: '2.5rem',
  },
})

export const MainSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ControlsContainer = styled('div', {
  position: 'relative',
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  a: {
    '&:focus': {
      boxShadow: 'none',
    },
  },

  '@media (min-width: 1200px)': {
    width: '65rem',
  },
})

export const ControlBorderSeparator = styled('span', {
  width: '100%',
  height: '1.5px',
  backgroundColor: '$gray700',
})

export const ControlsSection = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})

export const NextSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  margin: '1rem 0',
  textAlign: 'right',
  maxWidth: '40vw',

  svg: {
    marginBottom: '1rem',
    color: '$gray300',
  },

  '@media (min-width: 680px)': {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: '1rem',
  },
})

export const PrevSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '1rem 0',
  maxWidth: '40vw',

  svg: {
    marginBottom: '1rem',
    color: '$gray300',
  },

  '@media (min-width: 680px)': {
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
  },
})

export const ControlText = styled('div', {
  h2: {
    fontSize: '1.2rem',
    color: '$gray100',
  },

  p: {
    fontSize: '0.85rem',
    color: '$gray400',
  },

  '@media (min-width: 480px)': {
    h2: {
      fontSize: '1.5rem',
    },

    p: {
      fontSize: '1rem',
    },
  },

  '@media (min-width: 1200px)': {
    h2: {
      fontSize: '2rem',
    },
  },
})
