import "../../styles/globals.css";

import Head from "next/head";

import { Provider }  from "react-redux";
import store from "../store";


function MyApp({ Component, pageProps }) {
  return (
    <div className="font-theme">
      <Head>
        <link rel="stylesheet" href="/fonts/style.css" />
      </Head>
      

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>


    </div>
  );
}

export default MyApp;
