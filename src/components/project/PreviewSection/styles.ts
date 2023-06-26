import { styled } from '@/styles'

export const PreviewSectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '2.5rem 0',

  h2: {
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '$gray300',
    textAlign: 'left',
  },

  '@media (min-width: 680px)': {
    maxWidth: '45rem',
  },

  '@media (min-width: 1200px)': {
    h2: {
      fontSize: '2rem',
    },

    maxWidth: '60rem',
  },
})

export const ImagesPreviewContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  margin: '3.5rem auto 0',

  img: {
    backgroundColor: '$gray800',
    borderRadius: '8px',
    padding: '0.5rem',
    width: 'clamp(240px, 80vw, 40rem)',
    height: 'auto',
  },

  '@media (min-width: 680px)': {
    img: {
      width: 'clamp(240px, 80vw, 45rem)',
    },
  },

  '@media (min-width: 1200px)': {
    flexDirection: 'row',
    gap: '1rem',
    maxWidth: '60rem',

    img: {
      width: 'clamp(240px, 40vw, 29.5rem)',
    },
  },
})
