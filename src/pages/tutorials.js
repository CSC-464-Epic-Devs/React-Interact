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
          Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.
          It is typically assisted by CSS for styling and JavaScript for animations.

          Web browser takes HTML documents from a web server or from local storage and render the documents into web pages.

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
          Cascading Style Sheets is a style sheet language used for styling a document written in a markup language like HTML. 
          CSS is an important technology of the World Wide Web, alongside HTML and JavaScript.
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
            JavaScript (JS), is a high-level, interpreted scripting language. 
            Javascript usually assists HTML by making webpages dynamic. Javascript has 
            lot of frameworks which are widely used in front-end web development making it 
            one of the fastest growning language in the world.
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
