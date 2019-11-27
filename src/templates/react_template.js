import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/react/layout";

const ReactTemplate = ({ data }) => {
  const mdx = data.mdx;
  return (
    <Layout>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mdx.body }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default ReactTemplate;
