import Script from "next/script";

const Analytics = () => (
  <>
    <Script
      async
      src={"https://www.googletagmanager.com/gtag/js?id=G-81EWEBVNMY"}
    />
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-81EWEBVNMY');
        `,
      }}
    />
    <Script
      async
      src={
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0657233283655783"
      }
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  </>
);

export default Analytics;
