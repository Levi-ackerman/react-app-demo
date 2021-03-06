import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: [
    '#4E117A',
    '#5E2686',
    '#6E3C92',
    '#7E519E',
    '#8E67AA',
    '#9E7DB6',
    '#AE92C2',
  ],
  secondary: [
    '#8c1d84',
    '#b725ac',
    '#d639cb',
    '#df63d6',
    '#e88de1',
    '#f0b8ec',
    '#f9e2f7',
  ],
  // Red, yellow & green generated by https://anice.red based on
  // the primary colour
  red: [
    '#760a0a',
    '#a60d0d',
    '#d51111',
    '#ee2b2b',
    '#f25a5a',
    '#f68989',
    '#f9b9b9',
  ],
  yellow: [
    '#b37200',
    '#e69200',
    '#ffab1a',
    '#ffbe4d',
    '#ffd180',
    '#ffe3b3',
    '#fff6e6',
  ],
  success: [
    '#3b8217',
    '#4ead1f',
    '#62d827',
    '#81e052',
    '#a1e87d',
    '#c0f0a9',
    '#e0f7d4',
  ],
  white: ['#fff', '#f6f9fc'],
  grayscale: [
    '#1f292e',
    '#415058',
    '#76828a',
    '#c8cdd0',
    '#e4e6e8',
    '#f2f2f3',
    '#ffffff',
  ],
  purple: ['#4e117a'],
  grey: ['#2d2d2d', '#939393', '#E0E0E0'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  heading: 'Karla, sans-serif',
  primary: 'Karla, sans-serif',
  pre: 'Karla, sans-serif',
  quote: 'Karla, sans-serif',
}

theme.sizes = {
  maxWidth: '1100px',
  checkboxSmall: '18px',
  checkboxNormal: '24px',
  radioButton: '24px',
  radioButtonInner: '16px',
}

export default theme
