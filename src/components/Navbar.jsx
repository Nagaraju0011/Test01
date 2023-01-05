import React from 'react'
import {Box, ListItem, List, ListItemButton, ListItemText } from '@mui/material';

function Navbar(props) {
  return (
    <>
    <Box sx={{display: { xs: 'none', sm: 'none', lg: 'flex' }}}>
        <List className='mainMenu'>            
        {props.primaryMenu.map((page) => (
            <ListItem key={page}>  
            <ListItemButton key={page}> <ListItemText  key={page}>{page}</ListItemText> </ListItemButton>
            </ListItem>  
        ))}  
        </List>          
    </Box>
    </>
  )
}

export default Navbar
