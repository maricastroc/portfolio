import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100%',

  '@media (min-width: 1440px)': {
    alignItems: 'center',
  },
})
