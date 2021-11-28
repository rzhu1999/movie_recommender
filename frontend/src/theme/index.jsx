import { createTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const theme = createTheme({
  palette: {
    // type: 'dark',
    // primary: {
    //   contrastText: '#ffffff',
    //   main: '#0277bd'
    // },
    // text: {
    //   primary: '#172b4d',
    //   secondary: grey[600]
    // }
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: '-0.24px'
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: '-0.24px'
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.06px'
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '-0.06px'
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '-0.05px'
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '-0.05px'
    },
    overline: {
      fontWeight: 500
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    // primary: {
    //   contrastText: '#ffffff',
    //   main: '#0277bd'
    // },
    background:{
      main: '#e0e0e0',
      secondary: '#9e9e9e',
    },
    text: {
      primary: '#ffffff',
      secondary: grey[300]
    }
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: '-0.24px'
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: '-0.24px'
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.06px'
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '-0.06px'
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '-0.05px'
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '-0.05px'
    },
    overline: {
      fontWeight: 500
    }
  }
});
