import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar,Avatar, Typography } from '@mui/material';
import ButtonField from '../ButtonField';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Profilepic from '../../static/images/profile-pic01.jpg'




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
            <ListItem sx={{ bgcolor: 'primary' }}>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                     
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Admin" variant="contained" size="small" className="family_list_btn"></ButtonField>
                <ButtonField variant="contained" size="small" className="family_list_btn" startIcon={<GroupAddIcon />}></ButtonField>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith" />
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic}  alt="User Name">
                    
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar src={Profilepic} alt="User Name"></Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Smith"/>
                <ButtonField value="Manager" variant="contained" size="small" className="family_list_btn"></ButtonField>

            </ListItem>
        </List>
        </Typography>
    </Typography>
  )
}

export default Family;
