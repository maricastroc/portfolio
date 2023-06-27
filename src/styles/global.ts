import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },

  a: {
    textDecoration: 'none',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Titillium Web, sans-serif',
    fontWeight: 500,
  },
})
