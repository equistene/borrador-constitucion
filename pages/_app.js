import "../styles/globals.scss";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics measurementId="G-8EJ684QQ9B" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
