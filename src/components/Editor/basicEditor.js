import React from 'react';

const BasicEditor = () => (
  <iframe
    src="https://codesandbox.io/embed/new?codemirror=1"
    style={{
      width: '100%',
      height: '500px',
      border: '0',
      borderRadius: '4px',
      overflow: 'hidden',
      allow:
        'geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb',
      sandbox:
        'allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
    }}
  ></iframe>
);

export default BasicEditor;
