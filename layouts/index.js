import { MDXProvider } from "@mdx-js/react";

function Layout({ children, frontMatter }) {
  return (
    <div>
      <pre>{JSON.stringify(frontMatter, null, 2)}</pre>
      <article className="prose">
        <MDXProvider>{children}</MDXProvider>
      </article>
    </div>
  );
}

const components = {
  div: ({ children, ...rest }) => (
    <div className="prose" {...rest}>
      {children}
    </div>
  ),
};

export default Layout;
