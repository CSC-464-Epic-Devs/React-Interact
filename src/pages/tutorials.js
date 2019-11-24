import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TutorialBlock from "../components/TutorialBlock";
import ContentBanner from "components/ContentBanner";

const data = [
  {
    title: "HTML",
    description:
      "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
  },
  {
    title: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
  },
  {
    title: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions"
  },
  {
    title: "React JS",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded."
  }
];

const Tutorials = () => (
  <Layout>
    <SEO title="Tutorials" />
    <ContentBanner>
      <h1
        style={{
          fontSize: 100,
          textAlign: "center"
        }}
      >
        Tutorials
      </h1>
      <br />
      <br />
      {data.map(module => (
        <TutorialBlock
          key={module.title}
          title={module.title}
          description={module.description}
        />
      ))}
      <br />
      <br />
    </ContentBanner>
  </Layout>
);

export default Tutorials;
