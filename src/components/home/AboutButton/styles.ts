import { styled } from '@/styles'

export const AboutButtonContainer = styled('div', {
  cursor: 'pointer',
  marginTop: '2.5rem',
  display: 'flex',
  alignItems: 'flex-start',
  borderRadius: '12px',

  '&:hover': {
    filter: 'brightness(1.3)',
    transition: '200ms',
  },
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$cyan700',
  width: '2.5rem',
  height: '2.7rem',
  borderBottomLeftRadius: '8px',
  borderTopLeftRadius: '8px',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$cyan500',
  width: '10rem',
  height: '2.7rem',
  borderBottomRightRadius: '8px',
  borderTopRightRadius: '8px',

  p: {
    fontFamily: 'Space Mono, monospace',
    color: '$white',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    fontSize: '0.85rem',
  },
})
