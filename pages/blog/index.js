import React from "react";
import { getPostSlugs } from "../../lib/posts";
import Link from "next/link";

function BlogIndex({ slugs }) {
  return (
    <div>
      <ul>
        {slugs.map((slug, idx) => (
          <li>
            <Link href={`/blog/${slug}`}>
              <a>{slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const slugs = getPostSlugs();
  console.log(slugs);
  return {
    props: {
      slugs,
    },
  };
};

export default BlogIndex;
