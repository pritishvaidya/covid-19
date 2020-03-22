import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';

import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import Footer from "../src/components/Footer";

import { store } from '../src/store';
import theme from '../theme'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header/>
        <Sidebar/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </Provider>
  )
}

export default App
