import { styled } from '@/styles'

export const ProjectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '2rem',
  gap: '3rem',

  '@media (min-width: 768px)': {
    padding: '2.5rem',
  },

  '@media (min-width: 980px)': {
    gap: '7rem',
  },
})

export const ImageHeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',

  img: {
    backgroundColor: '$gray900',
    borderRadius: '8px',
    padding: '1.5rem 0',
    width: 'clamp(240px, 80vw, 40rem)',
    height: 'auto',
  },
})

export const IntroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const ProjectInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',

  h2: {
    fontSize: '2.2rem',
    color: '$gray300',
  },

  '> p': {
    marginTop: '1.5rem',
    fontSize: '0.93rem',
    color: '$gray300',
    lineHeight: '1.85rem',
    marginBottom: '3.375rem',
  },

  span: {
    width: '100%',
    height: '1.5px',
    backgroundColor: '$gray700',
    margin: '2.5rem 0 1.5rem',
  },
})

export const DetailsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '0.85rem',
    fontWeight: 600,
    lineHeight: '1.8rem',
    color: '$cyan300',
  },

  button: {
    cursor: 'pointer',
    marginTop: '2rem',
    padding: '0.75rem 1.8rem',
    backgroundColor: 'transparent',
    border: '2px solid $cyan300',
    color: '$cyan300',
    fontFamily: 'Space Mono, monospace',
    textTransform: 'uppercase',
    width: '11.1rem',

    '&:hover': {
      backgroundColor: '$cyan700',
      color: '$white',
      border: '2px solid $cyan700',
      transition: '200ms',
    },
  },
})

export const Separator = styled('span', {
  width: '100%',
  height: '1.5px',
  backgroundColor: '$gray700',
  margin: '1.5rem 0 0',
})

export const DescriptionSection = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',

  h2: {
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '$gray300',
  },

  p: {
    marginTop: '1.75rem',
    fontSize: '0.93rem',
    color: '$gray300',
    lineHeight: '1.85rem',
  },
})

export const PreviewSection = styled('span', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '$gray300',
    textAlign: 'left',
  },
})

export const ImagesPreviewContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2.5rem',

  img: {
    backgroundColor: '$gray900',
    width: 'clamp(240px, 80vw, 40rem)',
    height: 'auto',
  },
})
