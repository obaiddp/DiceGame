import React, { useState } from 'react'

function RollDice({ currentDice, rollDiceImg }) { 

  return (
    <div className="DiceContainer">

        <div className="dice" onClick={rollDiceImg}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice" />
        </div>

        <p>Click on Dice to roll</p>
    </div>
  )
}

export default RollDice