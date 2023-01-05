import React from 'react'
import {AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ProfilePic from '../static/images/profile-pic01.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TryIcon from '@mui/icons-material/Try';
import GroupIcon from '@mui/icons-material/Group';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LogoutIcon from '@mui/icons-material/Logout';

import DrawerMenu from './DrawerMenu';

import Navbar from './Navbar';

const primaryMenu = ['Menu 1', 'Menu 2', 'Menu 3'];
const drawerMenu = [
  { icon: <TryIcon />, label: 'Menu 1' },
  { icon: <AutoGraphIcon />, label: 'Menu 2' },
  { icon: <GroupIcon />, label: 'Menu 3' },
  { icon: <LogoutIcon />, label: 'Logout' },
];
const settings = ['Profile', 'Account Settings', 'Change Password', 'Logout'];

function AppbarComponent() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position='static' color="secondary">
        <Toolbar className="toolBarCustom">
            <DrawerMenu drawerMenu={drawerMenu}></DrawerMenu>         
            <Typography variant="h5" component="h5" sx={{fontWeight:'bold', fontSize:'1.2 rem'}}>LOGO</Typography>
            
            <Navbar primaryMenu={primaryMenu}/>

            <Box sx={{ flexGrow: 0, marginLeft:'auto' }}>
              <IconButton size="large" color="inherit"><NotificationsIcon /></IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={ProfilePic} />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={Boolean(anchorElUser)}  onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default AppbarComponent
