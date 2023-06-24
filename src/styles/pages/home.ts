import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4rem auto 0',

  '@media (min-width: 485px)': {
    padding: '1.2rem',
    marginTop: 0,
  },

  '@media (min-width: 680px)': {
    padding: '2rem',
    marginTop: 0,
  },

  '@media (min-width: 1024px)': {
    padding: '2rem 4rem',
    marginTop: 0,
  },
})

export const Separator = styled('span', {
  minWidth: '100%',
  paddingLeft: '0',
  height: '1px',
  backgroundColor: '$gray700',
  margin: '2.5rem -2rem',
})
