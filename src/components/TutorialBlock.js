import React from 'react';
import { match } from 'minimatch';

const TutorialBlock = props => {
  const { title, description } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <br />
    </div>
  );
};

export default TutorialBlock;
