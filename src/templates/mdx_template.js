import React from "react";

import Layout from "components/layout";

import { graphql } from "gatsby";

import CodeBlock from "components/Editors/CodeBlock";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "components/seo";
import Content from "components/ContentBanner";
import HyperLink from "components/highLightLink";
import PrevNextNav from "components/prevNextNav";
// eslint-disable-next-line no-unused-vars
import MCQ from "components/mcq";
//import Truefalse from "components/truefalse";
//import Threechoicemcq from "components/threechoicemcq";

/* eslint-disable */
const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  a: HyperLink,
};
/* eslint-enable */

const MDXTemplate = ({ data }) => {
  const post = data.mdx;
  let home = post.fields.slug.match("(^/.*/.*/).*/");
  if (home) {
    home = home[1];
  }

  return (
    <>
      <Layout>
        <SEO title={post.frontmatter.title} />
        <Content>
          <h1>{post.frontmatter.title}</h1>
          <p>Last Edited: {post.frontmatter.date}</p>
          <PrevNextNav
            prev={post.frontmatter.prev}
            home={home}
            next={post.frontmatter.next}
          />
          <br />
          <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
          <PrevNextNav
            prev={post.frontmatter.prev}
            home={home}
            next={post.frontmatter.next}
          />
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
        next
        prev
      }
      body
    }
  }
`;

export default MDXTemplate;
