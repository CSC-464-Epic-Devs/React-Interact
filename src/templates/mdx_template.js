import React from "react";

import Layout from "components/layout";

import { graphql } from "gatsby";

import CodeBlock from "components/Editors/CodeBlock";
import HighLightLink from "components/highLightLink";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "components/seo";
import Content from "components/ContentBanner";
/* eslint-disable */
const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  a: HighLightLink
};
/* eslint-enable */

const MDXTemplate = ({ data }) => {
  const post = data.mdx;
  return (
    <>
      <Layout>
        <SEO title={post.frontmatter.title} />
        <Content>
          <p>Last Edited: {post.frontmatter.date}</p>
          <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Content>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(fromNow: true)
        theme
        title
      }
      body
    }
  }
`;

export default MDXTemplate;
