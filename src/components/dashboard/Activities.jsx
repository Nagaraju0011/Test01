import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar,Avatar, Typography } from '@mui/material';
import ButtonField from '../ButtonField';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


function Activities() {

    const activities = [
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        },
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        },
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        },
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        },
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        },
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        },
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        },
        {
            name:'Leslie Alexander',
            title:'updated her Account Type',
            date:'5 October 11:46 AM'
        }
    ]

    

  return (
    <Typography component="div" className='activities_lists' >
        <Typography component="div" item className='d-flex add_new_user justify-content-between align-items-start' >
            <Typography variant="h6">Activities</Typography>
            <Typography component="div">
                <ButtonField variant="contained" value="View All" color='success' size="small" />
            </Typography>
        </Typography>

        <List >
            {
                activities.map((items) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className='avatarIcon'><GroupAddIcon sx={{ fontSize: 16 }}/></Avatar>
                        </ListItemAvatar> 
                        <ListItemText>
                            <Typography><span>{items.name}</span> {items.title}</Typography> 
                            <small>{items.date}</small>  
                        </ListItemText>  
                    </ListItem>
                ))
            }         
        </List>
    </Typography>
  )
}

export default Activities
