import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";

import Paper from "@material-ui/core/Paper";

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, "");

  if (live) {
    return (
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column"
        }}
      >
        <LiveProvider
          code={children.trim()}
          transformCode={code => "/** @jsx mdx */" + code}
          scope={{ mdx }}
        >
          <Paper
            style={{
              backgroundColor: "black",
              display: "flex",
              fextDirection: "row",
              flexGrow: 1
            }}
          >
            <LiveEditor style={{ flexGrow: 1 }} />
            <LivePreview style={{ flexGrow: 1 }} />
          </Paper>
          <Paper
            style={{ flexGrow: 1, backgroundColor: "#ffc", color: "black" }}
          >
            <LiveError />
          </Paper>
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={children}>
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
