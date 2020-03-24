import React from "react";
import { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";

import Paper from "@material-ui/core/Paper";

const ReactLiveEditor = ({ children, className, live, noInline, render }) => {
  const language = className.replace(/language-/, "");

  if (live) {
    return (
      <Paper
        style={{
          backgroundColor: "black",
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column"
        }}
      >
        <LiveProvider
          code={children.trim()}
          transformCode={code => "/** @jsx mdx */" + code}
          scope={{ mdx, useState }}
          noInline={noInline}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch"
            }}
          >
            <div style={{ width: "100%" }}>
              <LiveEditor />
            </div>
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "black"
              }}
            >
              <LivePreview />
            </div>
          </div>
          <LiveError />
        </LiveProvider>
      </Paper>
    );
  }

  if (render) {
    return (
      <div
        style={{ marginTop: "40px", backgroundColor: "white", color: "black" }}
      >
        <LiveProvider
          code={children.trim()}
          transformCode={code => "/** @jsx mdx */" + code}
          scope={{ mdx }}
          noInline={noInline}
        >
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

ReactLiveEditor.defaultProps = {
  noInline: false,
  live: false,
  render: false
};

export default ReactLiveEditor;
