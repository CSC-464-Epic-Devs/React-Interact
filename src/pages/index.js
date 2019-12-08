import React from "react";

import Layout from "components/layout";
import CodeBackground from "components/BackgroundImages/CodeBackground";
import FogBackground from "components/BackgroundImages/FogBackground";
import BlurBackground from "components/BackgroundImages/BlurBackground";
import Dustin from "components/Images/Dustin";
import Adesh from "components/Images/Adesh";
import Yuki from "components/Images/Yuki";
import Mengesh from "components/Images/Mengesh";
import SEO from "components/seo";
import Logo from "components/Images/logo";
import ContentBanner from "components/ContentBanner";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const main = "#03a9f4";

const theme = createMuiTheme({
  palette: {
    primary: {
      main
    }
  },
  spacing: 8
});

const TopBanner = () => (
  <ContentBanner>
    <div
      style={{
        float: "right",
        width: "200px"
      }}
    >
      <Logo />
    </div>
    <h1>Regular Devs</h1>
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="primary">
        Learn ReactJS
      </Button>
      <div
        style={{ width: "5px", height: "auto", display: "inline-block" }}
      ></div>
      <Button variant="outlined" color="primary">
        All Tutorials
      </Button>
    </ThemeProvider>
  </ContentBanner>
);

const OurGoalBanner = () => (
  <BlurBackground>
    <ContentBanner
      style={{
        textAlign: "center"
      }}
    >
      <div
        style={{
          border: "solid thick rgb(56,56,56)",
          borderRadius: "1em",
          padding: "1em",
          color: "black"
        }}
      >
        <h2>Our Goal</h2>
        <p>
          Normally when programmers want to learn react or any other technology,
          the programmer needs to resort to documentation provided by the
          creator or other external educational tools.However the documentation
          may not serve as the best tool for learning as it requires learner to
          jump multiple places to get the required information to understand the
          concepts fully. Also other educational are either free or have minimal
          information or are expensive. React interact would allow anyone to
          hope on and learn React on their own time while providing guidance to
          reduce the difficulty and time it takes to learn new technology.
        </p>
      </div>
    </ContentBanner>
  </BlurBackground>
);

const InfoBanner = () => (
  <CodeBackground>
    <ContentBanner
      style={{
        textAlign: "center",
        height: "400px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "125px"
        }}
      >
        <div>
          <h2>X</h2>
          <p>Tutorials Available</p>
        </div>
        <div>
          <h2>Y</h2>
          <p>Projects and Examlpes</p>
        </div>
        <div>
          <h2>Z</h2>
          <p>Frameworks</p>
        </div>
      </div>
    </ContentBanner>
  </CodeBackground>
);

const TeamPictures = () => (
  <CodeBackground>
    <FogBackground>
      <div
        style={{
          textAlign: "center",
          color: "#000000"
        }}
      >
        <h2
          style={{
            textAlign: "center"
          }}
        >
          Our Team
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          <div>
            <Dustin
              style={{ width: "200px", height: "250px", borderRadius: "50%" }}
            />
            <p>Dustin (Dev Ops)</p>
          </div>
          <div>
            <Yuki
              style={{ width: "200px", height: "250px", borderRadius: "50%" }}
            />
            <p>Youki (Team Lead)</p>
          </div>
          <div>
            <Mengesh
              style={{ width: "200px", height: "250px", borderRadius: "50%" }}
            />
            <p>Mengesh (UX Design)</p>
          </div>
          <div>
            <Adesh
              style={{ width: "200px", height: "250px", borderRadius: "50%" }}
            />
            <p>Adesh (Developer)</p>
          </div>
        </div>
      </div>
    </FogBackground>
  </CodeBackground>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <TopBanner />
    <OurGoalBanner />
    <InfoBanner />
    <TeamPictures />
  </Layout>
);

export default IndexPage;
