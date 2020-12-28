import React from "react";
import { getPostSlugs } from "../../lib/posts";

function BlogIndex() {
  return <div></div>;
}

export const getStaticProps = async () => {
  getPostSlugs();
};

export default BlogIndex;
