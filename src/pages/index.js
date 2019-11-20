import React from 'react';

import Layout from '../components/layout';
import CodeBackground from '../components/BackgroundImages/CodeBackground';
import FogBackground from '../components/BackgroundImages/FogBackground';
import SEO from '../components/seo';
import Logo from '../components/Images/logo';
import ContentBanner from '../components/ContentBanner';
import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const main = '#03a9f4';

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
        float: 'right',
        width: '200px'
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
        style={{ width: '5px', height: 'auto', display: 'inline-block' }}
      ></div>
      <Button variant="outlined" color="primary">
        All Tutorials
      </Button>
    </ThemeProvider>
  </ContentBanner>
);

const OurGoalBanner = () => (
  <FogBackground>
    <ContentBanner
      style={{
        textAlign: 'center'
      }}
    >
      <div
        style={{
          border: 'solid thick rgb(56,56,56)',
          borderRadius: '1em',
          padding: '1em',
          color: 'black'
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
  </FogBackground>
);

const InfoBanner = () => (
  <CodeBackground>
    <ContentBanner
      style={{
        textAlign: 'center'
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
