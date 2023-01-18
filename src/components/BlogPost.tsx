import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
const PostsTemplate = ({ data, children }: any) => {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <h1>{data.mdx.frontmatter.date}</h1>
      <MDXProvider>{children}</MDXProvider>
    </>
  );
};

export default PostsTemplate;

export const Head = ({ data }: any) => (
  <title>{data.mdx.frontmatter.title}</title>
);

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
    }
  }
`;
