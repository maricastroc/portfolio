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

export const ImageHeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto 2rem',

  img: {
    backgroundColor: '$gray900',
    borderRadius: '8px',
    padding: '1.5rem 0',
    width: 'clamp(240px, 80vw, 40rem)',
    height: 'auto',
  },

  '@media (min-width: 680px)': {
    margin: '0 auto 1.5rem',

    img: {
      width: 'clamp(240px, 80vw, 45rem)',
    },
  },

  '@media (min-width: 1200px)': {
    img: {
      width: 'clamp(240px, 80vw, 60rem)',
    },
  },
})

export const IntroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '@media (min-width: 680px)': {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export const ProjectInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',
  margin: '3rem 0',

  '@media (min-width: 680px)': {
    maxWidth: '45rem',
    margin: '0 auto',
  },

  '@media (min-width: 1200px)': {
    minWidth: '60rem',
    margin: '3rem 0',
  },
})

export const TextProjectInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  width: '100%',

  h2: {
    fontSize: '2.2rem',
    color: '$gray300',
  },

  p: {
    marginTop: '1.5rem',
    fontSize: '0.93rem',
    color: '$gray300',
    lineHeight: '1.85rem',
    marginBottom: '3.375rem',
  },

  '@media (min-width: 680px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '45rem',
    margin: '3rem auto 0',

    p: {
      maxWidth: '50%',
      marginTop: '0.8rem',
      marginBottom: 0,
      backgroundColor: '$gray800',
      padding: '1.5rem',
      borderRadius: '8px',
    },
  },

  '@media (min-width: 1200px)': {
    minWidth: '60rem',
    margin: '0 auto',

    h2: {
      fontSize: '2.4rem',
    },

    p: {
      maxWidth: '60%',
    },
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

  a: {
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

  '@media (min-width: 680px)': {
    marginTop: '-9rem',
    marginBottom: '2rem',
  },

  '@media (min-width: 1200px)': {
    marginTop: '-6rem',
  },
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

export const DescriptionSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '2.5rem 0',

  '@media (min-width: 680px)': {
    maxWidth: '45rem',
  },

  '@media (min-width: 1200px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '60rem',
    gap: '4rem',
  },
})

export const DescriptionText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',

  h2: {
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '$gray300',
  },

  '> p': {
    marginTop: '1.75rem',
    fontSize: '0.93rem',
    color: '$gray300',
    lineHeight: '1.85rem',
  },

  '@media (min-width: 680px)': {
    h2: {
      fontSize: '2rem',
    },

    '> p': {
      backgroundColor: '$gray800',
      padding: '1.5rem',
      borderRadius: '8px',
    },
  },

  '@media (min-width: 1200px)': {
    width: '50%',

    '> p': {
      backgroundColor: '$gray800',
      padding: '1.5rem',
      borderRadius: '8px',
    },
  },
})

export const ToolsSection = styled('div', {
  display: 'none',

  '@media (min-width: 1200px)': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '2px solid $gray700',
    width: '40%',

    h2: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      fontWeight: 600,
      color: '$gray300',
    },

    span: {
      fontFamily: 'Space Mono, monospace',
      color: '$gray400',
      fontWeight: 600,
    },

    p: {
      fontFamily: 'Space Mono, monospace',
      fontSize: '0.95rem',
      color: '$cyan300',
      marginTop: '0.6rem',
    },
  },
})

export const PreviewSection = styled('div', {
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
    backgroundColor: '$gray900',
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

export const ControlsContainer = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '@media (min-width: 680px)': {
    width: '60rem',
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

export const ControlSeparator = styled('span', {
  width: '1.5px',
  height: '142px',
  backgroundColor: '$gray700',
  margin: '0 1rem',

  '@media (min-width: 680px)': {
    height: '110px',
  },
})

export const PrevSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '1rem 0',

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
    fontSize: '1.5rem',
    color: '$gray100',
  },

  p: {
    fontSize: '1rem',
    color: '$gray400',
  },

  '@media (min-width: 680px)': {
    h2: {
      fontSize: '2rem',
    },
  },
})
