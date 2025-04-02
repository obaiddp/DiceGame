import React, { use } from 'react'
import Styles from './Running.module.css'
import Button from '../Button/Button'
import TotalScore from '../TotalScore/TotalScore'
import NumberSelector from '../NumberSelector/NumberSelector'
import RollDice from '../RollDice/RollDice'
import ManualContainer from '../ManualContainer/ManualContainer' 

import { useState } from 'react'

function Running() {
    const array = [1, 2, 3, 4, 5, 6];

    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(null);    
    const [currentDice, setCurrentDice] = useState(1);
    const [showManual, setShowManual] = useState(false);

    const getRandomInt = (min, max) => {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }
  
    const rollDiceImg = () => {
      // Check if a number is selected before rolling
      if (selectedNumber === null) {
        alert("Please select a number first!");
        return;
      }

      const r = getRandomInt(1, 7);
      setCurrentDice((prev) => r);

      if (selectedNumber === currentDice){
        setScore((prev) => prev + r)
      }
      else{
        setScore((prev) => prev - 2)
      }
    }

    const resetScore = () => {
      setScore(0);
    }

    const showManualContainer = () => {
      setShowManual(prev => !prev)
    }

    return (
     <div className={Styles.container}>

          <div className={Styles.top}>
              
              <div className={Styles.topLeft}>
                <TotalScore score={score}/>
             </div>
              
              <div className={Styles.topRight}>
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
                <p>Select Number</p>
              </div>

         </div>

          <div className={Styles.bottom}>
              <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice} rollDiceImg={rollDiceImg}/>
             
              <Button text="Reset Score" col={'white'} onClick={resetScore}/>
              <Button text="Show Rules" onClick={showManualContainer}/>
         </div>

        {showManual && <ManualContainer/>}         

         <div>
            <h2>{selectedNumber === currentDice ? "Hurray": "Womp Womp"}</h2>
         </div>

     </div>
   )
}

export default Running