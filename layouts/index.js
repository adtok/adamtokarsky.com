import { MDXProvider } from "@mdx-js/react";

function Layout({ children, frontMatter }) {
  return (
    <div className="prose md:prose-lg">
      <h1>Article title</h1>
      {/* <article className="prose md:prose-lg"> */}
      <article>
        <MDXProvider>{children}</MDXProvider>
      </article>
    </div>
  );
}

export default Layout;
