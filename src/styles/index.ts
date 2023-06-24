import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray700: '#29292d',
      gray400: '#757575',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      purple300: '#bb86fc',
      purple500: '#9872ce',

      darkpurple300: '#8888e2',
      darkpurple500: '#837ce0',
      darkpurple700: '#4e4e84',

      cyan300: '#06ccb4',
      cyan500: '#12827a',
      cyan700: '#0c5b55',

      green500: '#00875f',
      green300: '#00b37e',
    },
  },
})
