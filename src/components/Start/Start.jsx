import React from 'react'
import Styles from './Start.module.css'
import Button from '../Button/Button'

function Start({ toggle }) {
  return (
    <div className={Styles.container}>

        <div className={Styles.left}>
          <img src="./images/dices1.png" alt="dices" />
        </div>

        <div className={Styles.right}>
          <h1>DICE GAME</h1>
          <div className={Styles.buttonContainer}>
            <Button onClick={toggle} text="Play Now"/>
          </div>
        </div>

    </div>
  )
}

export default Start