import "../styles/globals.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Script
        src="https://www.google-analytics.com/analytics.js?id=G-8EJ684QQ9B"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8EJ684QQ9B');
        `}
      </Script>
    </>
  );
}

export default MyApp;
