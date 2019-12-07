import React from 'react';
import styles from './styles/Explanation.module.css';

const Explanation = props => {
  const { header, children } = props;

  return (
    <div className={styles.container}>
      <h1>{header}</h1>
      <text>{children}</text>
    </div>
  );
};

export default Explanation;
