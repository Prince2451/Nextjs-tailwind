import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { withLibsBP } from "../hoc";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withLibsBP(MyApp);
