import React from "react";
import Paper from "@material-ui/core/Paper";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { defaultProps } from "prism-react-renderer";

function BasicEditor(props) {
  return (
    <LiveProvider
      code={props.code}
      style={{
        border: "solid thick red",
        display: "flex"
      }}
    >
      <div
        style={{
          display: "flex"
        }}
      >
        <Paper style={{ flexGrow: "1" }}>
          <LiveEditor />
        </Paper>
        <Paper style={{ flexGrow: "1" }}>
          <LivePreview
            style={{
              color: "black"
            }}
          />
        </Paper>
      </div>
      <LiveError />
    </LiveProvider>
  );
}

export default BasicEditor;
