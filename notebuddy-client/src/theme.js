import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const fontWeights = {
  extrathin: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

export const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px'
};

export const colors = {
  lbg: '#ffffff',
  lsurface: '#e2e8f0',
  lprimary: '#38a169',
  lsecondary: '#000000',
  lerror: '#e53e3e',
  lwarning: '#dd6b20',
  linfo: '#3182ce',
  lsuccess: '#38a169',
  dbg: '#242627',
  dsurface: '#3E3F43',
  dprimary: '#9ae6b4',
  dsecondary: '#ffffff',
  derror: '#feb2b2',
  dwarning: '#fbd38d',
  dinfo: '#90cdf4',
  dsuccess: '#9ae6b4'
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('lbg', 'dbg')(props)
    },
    '.ql-container': {
      fontFamily: 'body'
    },
    '::-webkit-scrollbar': {
      width: '0.5rem'
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px',
      background: 'lsurface'
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: 'dsurface'
    }
  })
};

const fonts = {
  heading: 'QuicksandVariable',
  body: 'MontserratVariable'
};

const components = {
  Modal: {
    // setup light/dark mode component defaults
    baseStyle: (props) => ({
      dialog: {
        bg: mode('lsurface', 'dsurface')(props)
      }
    })
  },
  Link: {
    // setup light/dark mode component defaults
    variants: {
      baseVariant: (props) => ({
        color: mode('linfo', 'dinfo')(props)
      })
    },
    defaultProps: {
      variant: 'baseVariant'
    }
  }
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  fontSizes,
  fontWeights
});

export default theme;