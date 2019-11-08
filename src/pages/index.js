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
    <p>
      Normally when programmers want to learn react or any other technology, the
      programmer needs to resort to documentation provided by the creator or
      other external educational tools.However the documentation may not serve
      as the best tool for learning as it requires learner to jump multiple
      places to get the required information to understand the concepts fully.
      Also other educational are either free or have minimal information or are
      expensive. React interact would allow anyone to hope on and learn React on
      their own time while providing guidance to reduce the difficulty and time
      it takes to learn new technology.
    </p>
  </ContentBanner>
);

const InfoBanner = () => (
  <ContentBanner
    style={{
      textAlign: "justify",
      backgroundImage: "linear-gradient(teal, blue)",
      padding: "10% 0"
    }}
  >
    <h2>30</h2>
    <h2>60</h2>
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
