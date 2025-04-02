import React from 'react'
import Styles from './NumberBox.module.css'

function NumberBox({ value, onClick, isSelected }) {
  return (
    <div className={`${Styles.box} ${isSelected ? Styles.selected: ''}`} onClick={onClick}>
      <h3>{value}</h3>
    </div>
  )
}

export default NumberBox