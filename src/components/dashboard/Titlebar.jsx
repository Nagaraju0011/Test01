import React, { Fragment } from 'react'
import {Typography, Alert, Button} from '@mui/material';
import ButtonField from '../ButtonField'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Titlebar() {
  return (
    <Fragment>
        
        <Typography component="div">
                <Typography component="div" className='my-account-titlebar d-flex justify-content-between'>
                        <Typography variant='h5' sx={{display: { xs: 'flex', sm: 'none', md: 'none', lg: 'flex'}}}>My Account</Typography>
                        <Alert severity="success" className='customAlerts' icon={false} sx={{color:'#1f9232', display: { xs: 'flex', sm: 'none', md: 'none', lg: 'flex'}}}>This is a success alert — check it out!</Alert>
                        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex'}}}><ButtonField  variant="contained" value="View Button" color='secondary' size="medium"/></Typography>
                        <Typography sx={{display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none'}}}><MoreHorizIcon/></Typography>
                        
                </Typography>
        </Typography>

    </Fragment>
  )
}

export default Titlebar
