import React, { useEffect } from 'react'
import Head from 'next/head'
import document from 'global/document'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import CssBaseline from '@material-ui/core/CssBaseline'

import Layout from '../src/components/Layout'
import configureStore from '../src/redux/configureStore'

function MyApp({ Component, pageProps }) {
  const { store, persistor } = configureStore()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Project COVID-19</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
    </>
  )
}

export default MyApp
