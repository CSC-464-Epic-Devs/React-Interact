import React from 'react';
import './styles/TutorialBlock.css';

const TutorialBlock = props => {
  const { title, description } = props;
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{description}</p>
      <br />
    </div>
  );
};

export default TutorialBlock;
