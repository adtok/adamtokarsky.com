import "../fonts/Inter/inter.css";
import Head from "next/head";
import Link from "next/link";
// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "katex/dist/katex.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header></header>
      <main className="max-w-3xl bg-gray-100 mx-auto p-8">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
