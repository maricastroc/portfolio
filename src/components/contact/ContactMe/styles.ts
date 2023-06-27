import { styled } from '@/styles'

export const ContactMeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',

  h2: {
    fontSize: '2.2rem',
    color: '$gray300',
  },

  '@media (min-width: 1024px)': {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
})

export const ContactForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'left',

  '@media (min-width: 1024px)': {
    width: '50%',
  },
})

export const FormItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  label: {
    marginTop: '1.5rem',
    fontSize: '0.8125rem',
    color: '$gray100',
  },

  input: {
    padding: '0.55rem 1rem',
    backgroundColor: '$gray700',
    color: '$gray300',
    fontSize: '0.8125rem',
    border: 'none',
  },

  textarea: {
    resize: 'none',
    backgroundColor: '$gray700',
    color: '$gray300',
    fontSize: '0.8125rem',
    lineHeight: 1.4,
    border: 'none',
    padding: '0.55rem 1rem',
    height: '6rem',
  },

  '@media (min-width: 1024px)': {
    label: {
      fontSize: '0.9rem',
    },

    input: {
      fontSize: '0.9rem',
    },

    textarea: {
      fontSize: '0.9rem',
    },
  },
})

export const SendMessageButton = styled('button', {
  cursor: 'pointer',
  marginTop: '2rem',
  padding: '0.9rem 2rem',
  backgroundColor: 'transparent',
  border: '2px solid $cyan300',
  color: '$cyan300',
  fontFamily: 'Space Mono, monospace',
  textTransform: 'uppercase',
  width: '12.5rem',

  '&:hover': {
    backgroundColor: '$cyan700',
    color: '$white',
    border: '2px solid $cyan700',
    transition: '200ms',
  },
})
