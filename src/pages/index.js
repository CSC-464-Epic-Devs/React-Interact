import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import ContentBanner from "../components/banner";
import Button from "@material-ui/core/Button";

const TopBanner = () => (
  <ContentBanner
    style={{
      background: "black",
      color: "white"
    }}
  >
    <div style={{ height: "100px", float: "right" }}>
      <Image />
    </div>
    <h1>React Interact</h1>
    <h2>Regular Devs</h2>
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10%" }}
      >
        Learn ReactJS
      </Button>

      <Button variant="contained" color="primary">
        All Tutorials
      </Button>
    </div>
  </ContentBanner>
);

const OurGoalBanner = () => (
  <ContentBanner
    style={{
      textAlign: "center",
      backgroundImage: "linear-gradient(teal, blue)",
      padding: "10% 0"
    }}
  >
    <h2>Our Goal</h2>
  </ContentBanner>
);

const InfoBanner = () => (
  <ContentBanner
    style={{
      textAlign: "center",
      backgroundImage: "linear-gradient(teal, blue)",
      padding: "10% 0"
    }}
  >
    <h2>Our Goal</h2>
  </ContentBanner>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <TopBanner />
    <OurGoalBanner />
    <InfoBanner />
  </Layout>
);

export default IndexPage;
