import React from 'react'
import { Typography } from '@mui/material';
import {Row, Col} from 'react-bootstrap'

import InputField from '../InputField';



function Userdetailsform() {
  return (
    <Typography component="div" className="user_details_form">
        
        <form className="user_form">
            <Row className='userform_container_row'>
                <Col lg={6} md={4} sm={6}>
                    <Row className="fname m-0" >
                        <Col lg={5} md={12} className="p-0"><label>First Name:</label></Col>
                        <Col lg={7} sm={12} className="p-0"><InputField value="Jhon" /> </Col>
                    </Row>
                </Col>
                <Col lg={6} md={4} sm={6}>
                    <Row className="lname m-0">
                        <Col lg={5} md={12} className="p-0"><label>Last Name:</label></Col>
                        <Col lg={7} sm={12} className="p-0"><InputField value="Smith"/> </Col>
                    </Row>
                </Col>
                <Col lg={6} md={4} sm={6}>
                    <Row className="gyear m-0">
                        <Col lg={5} md={12} className="p-0"><label>Graduation Year:</label></Col>
                        <Col lg={7} sm={12} className="p-0"><InputField value="2005"/></Col>
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <Row className="phone m-0">
                        <Col lg={5} md={12} className="p-0"><label>Phone:</label></Col>
                        <Col lg={7} sm={12} className="p-0"><InputField value="+91 9755512458"/></Col>
                    </Row>
                </Col>
                <Col lg={6} md={4} sm={6} className='email'>
                    <Row className='m-0'>
                        <Col lg={5} md={12} className="p-0"><label>Email:</label></Col>
                        <Col lg={7} sm={12} className="p-0"><InputField value="jhonsmith@gmail.com" disabled/></Col>
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6} className="dateofbirth">
                    <Row className='m-0'>
                        <Col lg={5} md={12} className="p-0"><label>Date of Birth:</label></Col>
                        <Col lg={7} sm={12} className="p-0"><InputField value="10/05/2005" disabled/></Col>
                    </Row>
                </Col>
            </Row>
           
        </form>  
    </Typography>
  )
}

export default Userdetailsform
