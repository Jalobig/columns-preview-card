import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={classes.button} style={{color: props.color}}>Learn More</button>
  )
}

export default Button