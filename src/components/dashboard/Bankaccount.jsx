import React from 'react'
import { Typography } from '@mui/material';
import Profilepic from '../../static/images/card-details.jpg'

function Bankaccount() {
  return (
    <Typography component="div" className='bankAccountSection' >
        <Typography component="div" item className='d-flex add_new_user justify-content-between align-items-start' >
            <Typography variant="h6">Bank Account</Typography>           
        </Typography>
        <Typography component="div" align='left' pt={3} className='bankimages'>
            <img src={Profilepic} alt='' />
            <img src={Profilepic} alt='' />
        </Typography>
    </Typography>
  )
}

export default Bankaccount
