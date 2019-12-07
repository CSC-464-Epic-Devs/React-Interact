import React from 'react';
import styles from './styles/NoteBlock.module.css';

const NoteBlock = props => {
  const { header, children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.textbody}>
        <h4>{header}</h4>
        {children}
      </div>
    </div>
  );
};

export default NoteBlock;
