import React from "react";

import Layout from "../components/layout";
import CodeBackground from "../components/BackgroundImages/CodeBackground";
import FogBackground from "../components/BackgroundImages/FogBackground";
import SEO from "../components/seo";
import Logo from "../components/Images/logo";
import Image from "../components/Images/image";
import ContentBanner from "../components/banner";
import Button from "@material-ui/core/Button";

const TopBanner = () => (
  <ContentBanner>
    <div
      style={{
        float: "right",
        width: "15%",
        margin: "1em"
      }}
    >
      <Logo style={{ height: "50px", width: "25%" }} />
    </div>
    <h2>Regular Devs</h2>
    <div>
      <Button variant="contained" color="primary">
        Learn ReactJS
      </Button>

      <Button variant="contained" color="primary">
        All Tutorials
      </Button>
    </div>
  </ContentBanner>
);

const OurGoalBanner = () => (
  <FogBackground>
    <ContentBanner
      style={{
        textAlign: "center"
      }}
    >
      <h2>Our Goal</h2>
      <p>
        Normally when programmers want to learn react or any other technology,
        the programmer needs to resort to documentation provided by the creator
        or other external educational tools.However the documentation may not
        serve as the best tool for learning as it requires learner to jump
        multiple places to get the required information to understand the
        concepts fully. Also other educational are either free or have minimal
        information or are expensive. React interact would allow anyone to hope
        on and learn React on their own time while providing guidance to reduce
        the difficulty and time it takes to learn new technology.
      </p>
    </ContentBanner>
  </FogBackground>
);

const InfoBanner = () => (
  <CodeBackground>
    <ContentBanner
      style={{
        textAlign: "center"
      }}
    >
      <h2>30</h2>
      <h2>60</h2>
    </ContentBanner>
  </CodeBackground>
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
