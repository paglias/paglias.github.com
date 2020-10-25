import "../styles/globals.css";
import { AppProps } from "next/app";

function MatteoPagliazzi({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MatteoPagliazzi;
