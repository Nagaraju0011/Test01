import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography,Container,Avatar, Button, Tooltip, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProfilePic from '../static/images/profile-pic01.jpg';


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const pages = ['Menu 1', 'Menu 2', 'Menu 3'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppBars() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar  disableGutters>
        
        <Typography variant="h6" noWrap component="a" href="/"  sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',
        fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }}>
        LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>

          <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'left', }}
            open={Boolean(anchorElNav)}  onClose={handleCloseNavMenu}  className="mobileDropDownMenu"
            sx={{ display: { xs: 'block', md: 'none' },}}>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav"
          aria-labelledby="nested-list-subheader">

            {pages.map((page) => (
              <ListItemButton key={page} onClick={handleCloseNavMenu} >
                <Typography textAlign="center"><ListItemIcon><SendIcon /></ListItemIcon> {page}</Typography>
              </ListItemButton>
            ))} 

            <ListItemButton>
              <ListItemIcon><SendIcon /></ListItemIcon>
              <ListItemText primary="Menu 1" /></ListItemButton>
            <ListItemButton>
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />{open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon><StarBorder /></ListItemIcon>
                  <ListItemText primary="Starred" /></ListItemButton>
              </List>
            </Collapse>
          </List>
            {/* {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu} >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))} */}
          </Menu>
        </Box>

        <Typography variant="h5" noWrap component="a" href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.0rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', marginRight:5, marginLeft:2 }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0}}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={ProfilePic} />
            </IconButton>
          </Tooltip>
          <Menu 
            sx={{ mt: '45px'}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
}
export default AppBars;