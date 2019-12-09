import React from "react";
import { Link } from "gatsby";
import BookBackground from "components/BackgroundImages/tutorials/BookBackground";
import HTMLBackgorund from "components/BackgroundImages/tutorials/HTMLBackground";
import CSSBackgorund from "components/BackgroundImages/tutorials/CSSBackground";
import JSBackgorund from "components/BackgroundImages/tutorials/JSBackground";
import ReactBackgorund from "components/BackgroundImages/tutorials/ReactBackground";
import Layout from 'components/layout';


const TutorialsPage = () => (
  <Layout>
    <BookBackground>
      <div style={{ color: "black", height: "300px" }}></div>
    </BookBackground>

    <Link to="/tutorials/html/">
      <HTMLBackgorund>
        <div style={{ color: "black", height: "300px" }}></div>
      </HTMLBackgorund>
    </Link>

    <Link to="/tutorials/css/">
      <CSSBackgorund>
        <div style={{ color: "black", height: "300px" }}></div>
      </CSSBackgorund>
    </Link>

    <Link to="/tutorials/js/">
      <JSBackgorund>
        <div style={{ color: "black", height: "300px" }}></div>
      </JSBackgorund>
    </Link>

    <Link to="/tutorials/react/">
      <ReactBackgorund>
        <div style={{ color: "black", height: "300px" }}></div>
      </ReactBackgorund>
    </Link>
  </Layout>
);

export default TutorialsPage;
