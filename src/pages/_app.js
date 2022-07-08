import "../../styles/globals.css";

import Head from "next/head";
import { AuthContextComponent } from "../contexts/authContext";

import { Provider } from "react-redux";
import store from "../store";


function MyApp({ Component, pageProps }) {
  return (
    <AuthContextComponent>
      <div className="font-theme">
        

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </AuthContextComponent>
  );
}

export default MyApp;
