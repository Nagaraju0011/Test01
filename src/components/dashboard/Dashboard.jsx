import React, { Fragment } from 'react'
import Titlebar from './Titlebar';

import {Typography, Container} from '@mui/material';
import Userdetails from './Userdetails';
import Userdetailsform from './Userdetailsform';
import Profilebuttons from './Profilebuttons';
import Family from './Family';
import Bankaccount from './Bankaccount';
import Activities from './Activities';
import Billingadress from './Billingadress';
import Invitations from './Invitations';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { red } from '@mui/material/colors';

function Dashboard() {
        const colorsss = red[500];
const [value, setValue] = React.useState('1');
const handleChange = (event, newValue) => {
        setValue(newValue);
};
  return (
    <Fragment>
        <Container maxWidth={false}>
                <Titlebar/>
                <Typography component="div" className='grid-container desktopView' mb={2}>
                        <Typography component="div" className='grid-item item1 ' id="item1">
                                <Typography component="div" className='d-flex align-items-center justify-content-between ma_div' >
                                        <Userdetails/>
                                        <Userdetailsform/>
                                        <Profilebuttons/>
                                </Typography>
                        </Typography>
                        <Typography component="div" className='grid-item item2' id="item2" p={2}>
                                <Family/>               
                        </Typography>
                        <Typography component="div" className='grid-item item3' id="item3" p={2}>
                                <Bankaccount/>
                        </Typography>
                        <Typography component="div" className='grid-item item4 billing_address' id="item4" p={2}>
                                <Billingadress/>
                        </Typography>
                        <Typography component="div" className='grid-item item5' id="item5"  p={2}>
                                <Activities></Activities>
                        </Typography>
                        <Typography component="div" className='grid-item item6' id="item6" p={2}>
                                <Invitations/>
                        </Typography>
                </Typography>
                <Typography component="div" className='mobileView' mb={2}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabsMobileHome">
                                <TabList onChange={handleChange} indicatorColor={colorsss} aria-label="lab API tabs example">
                                <Tab label="Profile" value="1" />
                                <Tab label="Wallet" value="2" />
                                <Tab label="Activities" value="3" />
                                <Tab label="Invitations" value="4" />
                                </TabList>
                                </Box>
                                <Box className='mobileTabs'>
                                <TabPanel value="1" sx={{padding:0}}>
                                 <Family/>
                                 <Typography component="div" className='d-flex align-items-center justify-content-between ma_div' >
                                        <Userdetails/>
                                        <Userdetailsform/>
                                        <Profilebuttons/>
                                </Typography>
                                </TabPanel>
                                <TabPanel value="2" sx={{padding:0}}><Bankaccount/></TabPanel>
                                <TabPanel value="3" sx={{padding:0}}><Activities></Activities></TabPanel>
                                <TabPanel value="4" sx={{padding:0}}><Invitations/></TabPanel>
                                </Box>
                                </TabContext>
                        </Box>
                </Typography>
        </Container>
    </Fragment>
  )
}

export default Dashboard
