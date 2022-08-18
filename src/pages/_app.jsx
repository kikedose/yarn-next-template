import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';
import 'styles/globals.sass';

function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  pageProps: {},
};

export default App;
