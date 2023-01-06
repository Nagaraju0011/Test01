import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar,Avatar, Typography } from '@mui/material';
import ButtonField from '../ButtonField';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Profilepic from '../../static/images/profile-pic01.jpg'

const familyList = [
    {
        name:'John Smith',
        role:'Admin',
        img:'https://c.staticblitz.com/assets/vite/quote-author-stephen_fluin.92c7c87c.png',
        icon:<GroupAddIcon />
    },
    {
        name:'John Smith',
        role:'Manager',
        img:'https://mui.com/static/images/avatar/2.jpg'
    },
    {
        name:'John Smith',
        role:'Manager',
        img:'https://mui.com/static/images/avatar/1.jpg'
    },
    {
        name:'John Smith',
        role:'Manager',
        img:'https://mui.com/static/images/avatar/3.jpg'
    },
    {
        name:'John Smith',
        role:'Manager',
        img:'https://mui.com/static/images/avatar/5.jpg'
    },
    {
        name:'John Smith',
        role:'Manager',
        img:'https://mui.com/static/images/avatar/6.jpg'
    },
    {
        name:'John Smith',
        role:'Manager',
        img:'https://mui.com/static/images/avatar/7.jpg'
    },
    {
        name:'John Smith',
        role:'Manager',
        img:'https://mui.com/static/images/avatar/1.jpg'
    }
]


function Family() {
  return (
    <Typography component="div" >
        <Typography component="div" item className='d-flex add_new_user justify-content-between align-items-start' >
            <Typography variant="h6">Family</Typography>
            <Typography component="div">
                <ButtonField variant="text" size="small" color="secondary" startIcon={<SearchIcon /> }></ButtonField>
                <ButtonField variant="contained" value="Add New" color='success' size="small" />
            </Typography>            
        </Typography>
        <Typography component="div">

        <List className='family_list onlyfamily_list'>
            {
                familyList.map((item, index) => (
                    <ListItem>
                        <ListItemAvatar><Avatar src={item.img}  alt="User Name" sx={{ width: 35, height: 35 }}></Avatar></ListItemAvatar>    
                        <ListItemText>
                            <Typography><span>{item.name}</span> {}</Typography> 
                        </ListItemText>
                        <ButtonField variant="contained" size="small" color="success" className="family_list_btn" value={item.role}></ButtonField>
                        {index === 0 ? <ButtonField variant="contained" size="small" color="success" className="family_list_btn family_list_btn1" value={item.icon}></ButtonField> : ''}
                        
                    </ListItem>
                ))    
            }
        </List>

        </Typography>
    </Typography>
  )
}

export default Family;
