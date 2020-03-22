import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import document from 'global/document'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Layout from '../src/components/Layout'

import configureStore from '../src/redux/configureStore'
import theme from '../theme'

export default class MyApp extends App {
  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps } = this.props
    const { store, persistor } = configureStore()
    return (
      <>
        <Head>
          <title>Project COVID-19</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline/>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}
