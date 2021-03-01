import "../fonts/Inter/inter.css";
import Head from "next/head";
import Link from "next/link";
// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "katex/dist/katex.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adam Tokarsky</title>
      </Head>
      <div className="flex flex-col min-h-screen font-sans text-base antialiased text-gray-800">
        <header className="">
          <div className="flex flex-col sm:flex-row space-y-2 max-w-3xl mx-auto justify-center sm:justify-between px-8 py-4 items-center">
            <div className="flex-1 flex-shrink-0 justify-center lg:items-start">
              <h1 className="text-2xl font-bold uppercase tracking-wide">
                <span className="font-normal">Adam</span>Tokarsky
              </h1>
            </div>
            <div className="flex-1 flex space-x-4 justify-end text-lg font-medium text-gray-600">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/notes">Notes</NavLink>
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-1 max-w-3xl mx-auto w-full p-4">
          <Component {...pageProps} />
        </main>
        <footer>me</footer>
      </div>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <div>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </div>
  );
}

export default MyApp;
