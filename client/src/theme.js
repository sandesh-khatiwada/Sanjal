import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F06543', // Red-orange
      contrastText: '#E8E9EB', // Light gray for text on primary buttons
    },
    secondary: {
      main: '#313638', // Dark gray
      contrastText: '#E0DFD5', // Neutral tone
    },
    background: {
      default: '#E8E9EB', // Light gray background
      paper: '#E0DFD5', // Neutral tone for cards and containers
    },
    text: {
      primary: '#313638', // Dark gray for primary text
      secondary: '#F09D51', // Golden-orange for secondary text
    },
    action: {
      hover: '#F09D51', // Hover effect color
      selected: '#E0DFD5', // Selected effect color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#313638', // Dark gray for large headers
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.8rem',
      color: '#F06543', // Red-orange for subheaders
    },
    h6 : {
      fontWeight: 700,
      
    },
    body1: {
      fontSize: '1rem',
      color: '#313638', // Default body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#F09D51', // Secondary body text
    },
    body3 : {
      fontSize : '0.875rem',
      fontWeight: '600'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Remove uppercase text
          borderRadius: '8px', // Rounded corners for buttons
        },
        containedPrimary: {
          backgroundColor: '#F06543',
          color: '#E8E9EB',
          '&:hover': {
            backgroundColor: '#F09D51',
          },
        },
        containedSecondary: {
          backgroundColor: '#313638',
          color: '#E0DFD5',
          '&:hover': {
            backgroundColor: '#F09D51',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#313638', // Dark gray for navbar
          color: '#E8E9EB', // Light gray text in the navbar
        },
      },
    },
  },
});

export default theme;
