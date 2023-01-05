import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar,Avatar, Typography, Tab } from '@mui/material';
import ButtonField from '../ButtonField';
import Profilepic from '../../static/images/profile-pic01.jpg'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import {TabContext, TabList, TabPanel} from '@mui/lab';

const invitationList = [
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://c.staticblitz.com/assets/vite/quote-author-stephen_fluin.92c7c87c.png'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/2.jpg'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/1.jpg'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/2.jpg'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/1.jpg'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/2.jpg'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/1.jpg'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/2.jpg'
    },
    {
        name:'Leslie Alexander',
        title:'updated her Account Type',
        img:'https://mui.com/static/images/avatar/1.jpg'
    }
]


function Invitations() {

    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Typography component="div" >
        <Typography component="div" item className='d-flex add_new_user justify-content-between align-items-start' >
            <Typography variant="h6">Invitations</Typography>
            <Typography component="div"></Typography>            
        </Typography>
        <Typography component="div" >
            <Typography component="div" className="invite_tabs">
                <TabContext value={value} >
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Sent" value="2" />
                        <Tab label="Recieved" value="1" />
                    </TabList>

                    <TabPanel value="1" className='tabpannel'>
                        <List className='family_list invitation_list'>
                            {
                                invitationList.map((item) => (
                                    <ListItem>
                                        <ListItemAvatar><Avatar src={item.img}  alt="User Name"></Avatar></ListItemAvatar>    
                                        <ListItemText>
                                        <Typography><span>{item.name}</span> {item.title}</Typography> 
                                        </ListItemText>
                                        <ButtonField variant="contained" size="small" color="success" className="family_list_btn" startIcon={<CheckIcon />}></ButtonField>
                                        <ButtonField variant="contained" size="small"  color="error" className="family_list_btn" startIcon={<CloseIcon />}></ButtonField>
                                    </ListItem>
                                ))    
                            }

                        </List>
                    </TabPanel>
                    <TabPanel value="2">Sent Items comes here..</TabPanel>

                </TabContext>
            </Typography>
        
        </Typography>
    </Typography>
  )
}

export default Invitations
