import React from 'react'
import { Typography } from '@mui/material';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputField from '../InputField';
import ButtonField from '../ButtonField';
import {Col, Row} from 'react-bootstrap'



function Billingadress() {
  return (
    <Typography component="div" className='user_details_form billingadress_form' >
        <Typography component="div" item className='d-flex add_new_user justify-content-between align-items-start' >
            <Typography variant="h6">Billing Address</Typography>           
        </Typography>
        <Typography component="div" align='left' pt={3} className='bankimages'>
            <form className='user_form '>
                <FormGroup>
                    <FormControlLabel defaultChecked color="success"  control={<Checkbox defaultChecked />} label="Same as Home Address" />
                </FormGroup>
                <Row container className='userform_container_row'>
                    <Col item  md={6}  className="fname">
                        <label>First Name:</label> 
                        <InputField value="Jhon" type="text"/> 
                    </Col>
                    <Col item  md={6} className="fname">
                        <label>Last Name:</label> 
                        <InputField value="Smith" type="text"/> 
                    </Col>
                    <Col item  lg={6} md={12}  className="fname">
                        <label>Address Line 1:</label> 
                        <InputField value="1-2-3-4 lane1" type="text"/> 
                    </Col>
                    <Col item  md={6} className="adresslane2">
                        <label>Address Line 2:</label> 
                        <InputField value="1-2-3-4 lane2" type="text"/> 
                    </Col>

                    <Col item  lg={3} md={6} className="fname">
                        <label>Country:</label> 
                        <InputField value="India" type="text" disabled/> 
                    </Col>
                    <Col item  lg={3} md={6} className="fname">
                        <label>State/Provience/Region:</label> 
                        <InputField value="Telangana" type="text"/> 
                    </Col>
                    <Col item  lg={3} md={6} className="fname">
                        <label>City:</label> 
                        <InputField value="Hyderabad" type="text"/> 
                    </Col>
                    <Col item  lg={3} md={6} className="fname">
                        <label>Zip Code:</label> 
                        <InputField value="500039" type="text"/> 
                    </Col>
                    <Col item  sm={12} className="fname" align="right">
                        <ButtonField value="Edit Details" variant="contained" color="secondary"  size="small"/>    
                    </Col>
                </Row>
            </form>
        </Typography>
    </Typography>
  )
}

export default Billingadress
