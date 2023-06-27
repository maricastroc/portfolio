import { styled } from '@stitches/react'
import {
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Close as DialogClose,
} from '@radix-ui/react-dialog'

export const Overlay = styled(DialogOverlay, {
  position: 'fixed',
  width: '100%',
  height: '100%',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(DialogContent, {
  width: 'clamp(3rem, 90%, 20rem)',
  borderRadius: '12px',
  padding: '2rem',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',

  '@media (min-width: 480px)': {
    minWidth: '25rem',
  },

  '@media (min-width: 625px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '18rem',
    padding: '2rem',
    borderRadius: '6px',
  },
})

export const Title = styled(DialogTitle, {
  textAlign: 'center',
  fontSize: '1.8rem',
  lineHeight: '1.8rem',
  fontWeight: '600',
  width: '100%',
  margin: '0 auto',
  marginBottom: '1.5rem',
  color: '$gray300',
})

export const Subtitle = styled('div', {
  textAlign: 'center',

  p: {
    color: '$gray300',
    lineHeight: '1.4rem',
    fontWeight: '600',
    fontSize: '1.05rem',
  },
})

export const CloseButton = styled(DialogClose, {
  cursor: 'pointer',
  margin: '2rem auto 0',
  padding: '0.7rem 2rem',
  backgroundColor: 'transparent',
  border: '2px solid $cyan300',
  color: '$cyan300',
  fontFamily: 'Space Mono, monospace',
  textTransform: 'uppercase',
  alignSelf: 'center',
  width: '100%',

  '&:hover': {
    backgroundColor: '$cyan700',
    color: '$white',
    border: '2px solid $cyan700',
    transition: '200ms',
  },
})
