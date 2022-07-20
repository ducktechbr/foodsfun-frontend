import "../../styles/globals.css";

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextComponent } from "../contexts/authContext";

function MyApp({ Component, pageProps }) {
  return (

    
    <AuthContextComponent>
      <div className="font-theme">
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </div>
    </AuthContextComponent>
  );
}

export default MyApp;
