import "../../styles/globals.css";

import { AuthContextComponent } from "../contexts/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextComponent>
      <div className="font-theme">
        <Component {...pageProps} />
      </div>
    </AuthContextComponent>
  );
}

export default MyApp;
