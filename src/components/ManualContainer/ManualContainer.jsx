import React from 'react';
import styles from './ManualContainer.module.css';

const ManualContainer = () => {
  return (
    <div className={styles.manualContainer}>
      <h2 className={styles.title}>How to play dice game</h2>
      
      <ul className={styles.instructionList}>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on dice, if selected number is equal to dice number you will get same point as dice</li>
        <li>if you get wrong guess then 2 point will be deducted</li>
      </ul>
    </div>
  );
};

export default ManualContainer;