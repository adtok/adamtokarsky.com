import "../fonts/Inter/inter.css";
import Head from "next/head";
import Link from "next/link";
// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "katex/dist/katex.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans text-base antialiased text-gray-800">
        <header className="">
          <div className="md:flex max-w-2xl mx-auto justify-center md:justify-between p-4 items-center">
            <div className="flex-1 bg-gray-100 flex-shrink-0 justify-center lg:items-start">
              <h1 class="text-2xl font-semibold uppercase">
                <span class="font-light">Adam</span>Tokarsky
              </h1>
            </div>
            <div className="flex-1 flex space-x-4 bg-gray-200 justify-center md:justify-end">
              <div>Home</div>
              <div>Blog</div>
              <div>About</div>
              <div>Notes</div>
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-1 max-w-4xl mx-auto p-8">
          <Component {...pageProps} />
        </main>
        <footer>me</footer>
      </div>
    </>
  );
}

export default MyApp;
