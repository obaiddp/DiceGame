import React, { useState } from 'react'
import NumberBox from '../NumberBox/NumberBox'
import Styles from './numberSelector.module.css'

function NumberSelector({ selectedNumber, setSelectedNumber }) {
  const array = [1, 2, 3, 4, 5, 6];
 
  console.log(selectedNumber);

  return (
    <div className={Styles.container}>

        {array.map((value, index) => (
            <NumberBox
                isSelected = {value === selectedNumber} 
                key={index} 
                value={value} 
                onClick={() => setSelectedNumber(value)}
                />
        ))}

    </div>
  )
}

export default NumberSelector