import {UserProvider} from "../context"
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css'; 
import "../public/css/slider.css"; 
import "../public/css/all.css";
import "../public/css/Game1.css";
import '../public/css/Game2.css';
import Navbar from "../component/subcomp/Navbar"

import Head from "next/head"
// import { Html, Head, Main, NextScript } from 'next/document'
export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
    <Head>
    <link rel='stylesheet' href='/css/all.css' />
    <link rel='stylesheet' href='/css/signup.css' />
        
        {/* <link rel='stylesheet' href='/css/login.css' /> */}
    </Head>
    <ToastContainer position="top-center"/>
    <Navbar/>
  <Component {...pageProps} />
  </UserProvider>
  );
}