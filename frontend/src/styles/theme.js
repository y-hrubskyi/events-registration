export const theme = {
  colors: {
    white: '#fff',
    black: '#121417',
    gray: (alpha = 1) => `rgba(18, 20, 23, ${alpha})`,
    accent: '#3470ff',
    hover: '#0b44cd'
  },
  radii: {
    btn: '12px',
    img: '14px',
    card: '14px'
  },
  transition: (prop = '') => `${prop} 250ms linear`,
  spacing: value => `${value * 4}px`
};
