import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover" />
      </Head>

      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
  