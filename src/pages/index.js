import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import Button from "@material-ui/core/Button";

const bannerHeight = "250px";

const TopBanner = () => (
  <div
    style={{
      background: "black",
      color: "white",
      height: bannerHeight
    }}
  >
    <div style={{ width: bannerHeight, float: "right" }}>
      <Image />
    </div>
    <h1>React Interact</h1>
    <h2>Regular Devs</h2>
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10%", background: "teal" }}
      >
        Learn ReactJS
      </Button>

      <Button
        variant="contained"
        color="primary"
        style={{ background: "teal" }}
      >
        All Tutorials
      </Button>
    </div>
  </div>
);

const OurGoalBanner = () => (
  <div
    style={{
      textAlign: "center",
      backgroundImage: "linear-gradient(teal, blue)",
      height: bannerHeight,
      padding: "10% 0"
    }}
  >
    <h2>Our Goal</h2>
  </div>
);

const InfoBanner = () => (
  <div
    style={{
      textAlign: "center",
      backgroundImage: "linear-gradient(teal, blue)",
      height: bannerHeight,
      padding: "10% 0"
    }}
  >
    <h2>Our Goal</h2>
  </div>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <TopBanner />
    <OurGoalBanner />
    <InfoBanner />
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
