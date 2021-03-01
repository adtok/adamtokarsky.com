import { MDXProvider } from "@mdx-js/react";

function Layout({ children, frontMatter }) {
  return (
    <div className="mx-auto w-full bg-gray-200">
      <div className="px-4 space-y-4">
        <h1 className="text-3xl font-extrabold">{frontMatter.title}</h1>
        <p className="">{frontMatter.description}</p>
      </div>
      {/* <article className="prose md:prose-lg"> */}
      <article className="mt-4 prose mx-auto">
        <MDXProvider>{children}</MDXProvider>
      </article>
    </div>
  );
}

export default Layout;
