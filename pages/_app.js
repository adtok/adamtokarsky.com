import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
// import "katex/dist/katex.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/blog/this-is-a-test">
        <a style={{ marginLeft: "1rem" }}>blogpost</a>
      </Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
