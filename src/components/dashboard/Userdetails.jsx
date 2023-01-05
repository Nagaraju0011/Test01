import React from 'react'
import {Typography} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfilePic from '../../static/images/profile-pic01.jpg';
import InputField from '../InputField';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Visibility } from '@mui/icons-material';

function Userdetails() {
  return (

    <Typography component="div" className='d-flex'>
        <Typography component='div' className='user_details d-flex p-md-15 align-items-center'>
            <div className='user_profile_pic'>
                <img src={ProfilePic} alt="img" />    
                        
            </div>            
            <div className='' align='left'>
                <Typography component='h4' className="cameraIcon">
                  <InputField type="file" sx={{visibility:'hidden', width:'90px', height:'58px'}} />                    
                  <CameraAltIcon/>
                </Typography>             
                <Typography component='h4'>Jhon Smith</Typography>  
                <small><LocationOnIcon/>  Main St. Farmington, CA 123</small>  
            </div>
        </Typography>
    </Typography>

  )
}

export default Userdetails
