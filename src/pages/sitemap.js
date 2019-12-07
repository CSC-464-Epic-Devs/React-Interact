import React from "react";
import SEO from "components/seo";
import { graphql, Link } from "gatsby";

import Layout from "components/layout";

function sitemap({ data }) {
  const pages = data.allSitePage.edges.map(page => (
    <li key={page.node.path}>
      <Link to={page.node.path}>{page.node.path}</Link>
    </li>
  ));
  return (
    <Layout>
      <SEO title="sitemap" />
      <h1>Sitemap</h1>
      <ul>{pages}</ul>
    </Layout>
  );
}

export const query = graphql`
  query SiteMapQuery {
    allSitePage(sort: { order: ASC, fields: path }) {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default sitemap;
