import { MDXProvider } from "@mdx-js/react";

function Layout({ children, frontMatter }) {
  return (
    <div>
      <pre>{JSON.stringify(frontMatter, null, 2)}</pre>
      <MDXProvider>{children}</MDXProvider>
    </div>
  );
}

export default Layout;
