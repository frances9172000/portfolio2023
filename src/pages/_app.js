import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="portfolio, web development, next.js"
        />
        <title>FGdev</title>
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
