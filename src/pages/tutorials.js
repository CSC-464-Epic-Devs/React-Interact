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
      <div style={{ color: "black", height: "300px" }}>
      </div>
    </BookBackground>

    <Link to="/tutorials/html/">
      <HTMLBackgorund>
        <div style={{ color: "black", height: "300px" , paddingLeft: "75px", paddingRight: "75px", paddingTop: "50px", paddingBottom: "50px"}}>
        <div style={{backgroundColor:"rgba(255,255,255,0.7)", padding:"10px", borderRadius:"10px"}}>
          <h2>HTML</h2>
          <p>
          Hypertext Markup Language (HTML) is the 
          standard markup language for documents designed 
          to be displayed in a web browser. It can be assisted 
          by technologies such as Cascading Style Sheets (CSS) and 
          scripting languages such as JavaScript.

          Web browsers receive HTML documents from a web 
          server or from local storage and render the documents 
          into multimedia web pages. HTML describes the structure 
          of a web page semantically and originally included cues 
          for the appearance of the document.

          </p>
        </div>
        </div>
      </HTMLBackgorund>
    </Link>

    <Link to="/tutorials/css/">
      <CSSBackgorund>
        <div style={{ color: "black", height: "300px" , padding:"75px"}}>
        <div style={{backgroundColor:"rgba(255,255,255,0.8)", padding:"10px", borderRadius:"10px"}}>
          <h2>CSS</h2>
          <p>
          Cascading Style Sheets is a style sheet language used 
          for describing the presentation of a document written in a 
          markup language like HTML. CSS is a cornerstone technology of the 
          World Wide Web, alongside HTML and JavaScript.
          </p>
        </div>
        </div>
      </CSSBackgorund>
    </Link>

    <Link to="/tutorials/js/">
      <JSBackgorund>
        <div style={{ color: "white", height: "300px", padding:"75px" }}>
        <div style={{backgroundColor:"rgba(0,0,0,0.7)", padding:"10px", borderRadius:"10px"}}>
            <h2>JavaScript</h2>
            <p>
            JavaScript, often abbreviated as JS, is a high-level, 
            interpreted scripting language. 
            JavaScript has curly-bracket syntax, dynamic typing, 
            prototype-based object-orientation, and first-class functions.
            </p>
          </div>
        </div>
      </JSBackgorund>
    </Link>

    <Link to="/tutorials/react/">
      <ReactBackgorund>
        <div style={{ color: "white", height: "300px", padding:"75px" }}>
          <div style={{backgroundColor:"rgba(0,0,0,0.4)", padding:"10px", borderRadius:"10px"}}>
            <h2>React JS</h2>
            <p>
            React is a JavaScript library for building user interfaces. 
            It is maintained by Facebook and a community of individual 
            developers and companies. React can be used as a base in the 
            development of single-page or mobile applications, 
            as it is optimal for fetching rapidly changing data that 
            needs to be recorded.
            </p>
          </div>
        </div>
      </ReactBackgorund>
    </Link>
  </Layout>
);

export default TutorialsPage;
