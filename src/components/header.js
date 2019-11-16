import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";
import ContentBanner from "../components/ContentBanner";
import SiteLogo from "../components/Images/image";

const Header = () => (
  <header
    style={{
      background: "#333333"
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0, float: "left" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          React Interact
        </Link>
      </h1>

      <div
        style={{
          textAlign: "end"
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="secondary">
            Home
          </Button>
        </Link>
        &nbsp; &nbsp;
        <Link to="/tutorials" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="secondary">
            Tutorials
          </Button>
        </Link>
      </div>
      <br />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
