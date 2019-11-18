import React from 'react';

const TutorialBlock = props => {
  const { title, description } = props;
  return (
    <div style={{ width: '100%', height: '400' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <br />
    </div>
  );
};

export default TutorialBlock;
