import "../../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-theme">
      <Head>
        <link rel="stylesheet" href="/fonts/style.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
