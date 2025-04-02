import React from 'react'
import Styles from './Button.module.css'

function Button({ text, col, ...props }) {
  return (
    <button 
      className={col === 'white' ? Styles.whiteButton : Styles.defaultButton}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button