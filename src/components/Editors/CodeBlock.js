import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';

import Paper from '@material-ui/core/Paper';

const ReactLiveEditor = ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <Paper
        style={{
          backgroundColor: 'black',
          marginTop: '40px',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'column'
        }}
      >
        <LiveProvider
          code={children.trim()}
          transformCode={code => '/** @jsx mdx */' + code}
          scope={{ mdx }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch'
            }}
          >
            <div style={{ width: '100%' }}>
              <h2
                style={{
                  backgroundColor: 'gray',
                  borderTopLeftRadius: '.1em'
                }}
              >
                Editor
              </h2>
              <LiveEditor />
            </div>
            <div
              style={{
                width: '100%',
                backgroundColor: 'white',
                color: 'black'
              }}
            >
              <h2
                style={{
                  backgroundColor: 'gray',
                  borderTopRightRadius: '.1em',
                  color: 'white'
                }}
              >
                Preview
              </h2>
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
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
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

export default ReactLiveEditor;
