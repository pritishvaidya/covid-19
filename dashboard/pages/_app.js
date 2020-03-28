import React, { useEffect } from "react";
import Head from "next/head";
import document from "global/document";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import withRedux from "next-redux-wrapper";

import CssBaseline from "@material-ui/core/CssBaseline";

import configureStore from "../src/redux/configureStore";
import Layout from "../src/containers/Layout";
import Overlay from "../src/containers/Overlay";

function MyApp({ Component, pageProps, store }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Project COVID-19</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={<Overlay />} persistor={store.__persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}
export default withRedux(configureStore, { debug: true })(MyApp);
