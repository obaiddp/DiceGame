import React from 'react';
import Styles from './TotalScore.module.css';

function TotalScore({ score }) {
  return (
    <div>
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
}

export default TotalScore;