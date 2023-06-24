import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100vh',

  '@media (min-width: 1440px)': {
    alignItems: 'center',
  },
})
