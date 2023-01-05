import React from 'react'
import { FormControl, OutlinedInput } from '@mui/material';


function InputField(props) {

  return (
    <FormControl sx={{ width: 'auto' }}>
        <OutlinedInput placeholder="Please enter text" value={props.value} disabled={props.disabled} type={props.type}  />
    </FormControl> 
  )
}

export default InputField
