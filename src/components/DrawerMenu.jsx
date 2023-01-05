import {React, useState} from 'react'
import {IconButton, Drawer,Box, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Userdetails from './dashboard/Userdetails';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


import TryIcon from '@mui/icons-material/Try';
import GroupIcon from '@mui/icons-material/Group';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LogoutIcon from '@mui/icons-material/Logout';


function Drawermenu(props) {

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  
  return (
    <>
        <IconButton size="large" color="primary" sx={{display: { xs: 'flex', sm: 'flex', lg: 'none', padding:'0px 15px 0px 0px' }}} onClick={() => setIsDrawerOpen(true)} >
            <MenuIcon sx={{width:'2rem', height:'2rem'}} />
        </IconButton>  
        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false) }
          PaperProps={{sx: {width: '100%', color: "#fff", backgroundColor:"#232e3e"}
          }}
         >
          <Box p={2}  role='presentation'>
            <Typography variant="h5" component="h5" sx={{fontWeight:'bold', fontSize:'18px', display:'flex', marginBottom:'20px',  justifyContent:'space-between', alignItems:'center'}}>LOGO <DisabledByDefaultIcon onClick={() => setIsDrawerOpen(false)} sx={{marginLeft: 'auto',  width:'38px', height:'38px', borderRadius:'5px'}}/></Typography>

            <Typography variant="h5" component="h5" sx={{marginTop:5, marginBottom:4}}  >
              <Userdetails/>
            </Typography>
            
            <List>

              <ListItemButton onClick={handleClick}>
                <ListItemIcon><TryIcon sx={{color: '#fff'}} /></ListItemIcon>
                <ListItemText primary="Menu 1" />
                {show ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={show} timeout="auto" unmountOnExit>
                <List component="div" className='collapsMenu' disablePadding sx={{borderLeft:'solid 1px #f8991f', marginLeft:3.4, paddingLeft:3.4}}>
                  <ListItemButton><ListItemText primary="Sub Menu1" /></ListItemButton>
                  <ListItemButton><ListItemText primary="Sub Menu2" /></ListItemButton>
                  <ListItemButton><ListItemText primary="Sub Menu3" /></ListItemButton>
                  <ListItemButton><ListItemText primary="Sub Menu4" /></ListItemButton>
                </List>
              </Collapse>

              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon sx={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Menu 2" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon sx={{color: '#fff'}}>
                  <AutoGraphIcon />
                </ListItemIcon>
                <ListItemText primary="Menu 3" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon sx={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
      
            </List>



            {/* <Typography variant='h6' component="div">
              {props.drawerMenu.map((d) => (
                <Typography>{d.icon}{d.label}</Typography>
              ))}
            </Typography> */}
          </Box>
        </Drawer> 
    </>
  )
}

export default Drawermenu
