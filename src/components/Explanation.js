import React from 'react';
import styles from './styles/Explanation.module.css';

const Explanation = props => {
  const { header, children } = props;

  return (
    <div className={styles.container}>
      <h4>{header}</h4>
      {children}
    </div>
  );
};

export default Explanation;
