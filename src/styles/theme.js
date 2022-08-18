import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004466',
    },
  },
  typography: {
    h4: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.2rem',
      fontWeight: 500,
    },
  },
});

export default theme;
