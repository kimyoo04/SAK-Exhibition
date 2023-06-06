import "../styles/globals.css";
import "../styles/font.css";
import bg from "../public/images/grid-pattern-gray.png";

import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { Provider } from "react-redux";
import { store } from "@toolkit/store";
import Cursor from "@components/Cursor";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

  return (
    <>
      <Head>
        <title>SAK Exhibition</title>
        <meta
          name="description"
          content="SAK Exhibition Generated by Sae-sak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#FBFBFB" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`}
          defer
        ></script>
      </Head>

      <ThemeProvider attribute="class">
        <Provider store={store}>
          <main
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundRepeat: "repeat",
            }}
            className=" bg-light_bg_1 dark:bg-night_bg_1"
          >
            <Cursor />
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </main>
        </Provider>
      </ThemeProvider>
    </>
  );
}
