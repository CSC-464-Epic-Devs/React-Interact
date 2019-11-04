import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Button from "@material-ui/core/Button";

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <h1>React Interact</h1>
    <h2>Regular Devs</h2>

    <Button
      variant="contained"
      color="primary"
      style={{ marginRight: "100px" }}
    >
      Learn ReactJS
    </Button>

    <Button variant="contained" color="primary">
      All Tutorials
    </Button>

    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
