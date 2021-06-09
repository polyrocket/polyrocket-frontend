import type { AppProps } from "next/app";
import "normalize.css";
import { BaseCSS } from "styled-bootstrap-grid";
import GlobalStyle from "styles/global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../containers/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <BaseCSS />
      <GlobalStyle />
    </Layout>
  );
}

export default MyApp;
