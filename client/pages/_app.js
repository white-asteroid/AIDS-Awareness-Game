import 'bootstrap/dist/css/bootstrap.css';

import Head from "next/head"
// import { Html, Head, Main, NextScript } from 'next/document'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel='stylesheet' href='/css/all.css' />

        {/* <link rel='stylesheet' href='/css/login.css' /> */}
    </Head>
  <Component {...pageProps} />
  </>
  );
}