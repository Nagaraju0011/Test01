import React from 'react'
import Button from '@mui/material/Button';

function ButtonField(props) {
  return (
    <Button variant={props.variant} className={props.className} color={props.color} size={props.size} startIcon={props.startIcon}>{props.value}</Button>
  )
}

export default ButtonField
