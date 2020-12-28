import React from "react";
import { getPostSlugs } from "../../lib/posts";

function BlogIndex() {
  return <div></div>;
}

export const getStaticProps = async () => {
  getPostSlugs();

  return {
    props: {},
  };
};

export default BlogIndex;
