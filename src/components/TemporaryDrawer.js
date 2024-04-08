import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {useSelector} from 'react-redux';

export default function TemporaryDrawer() {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 , height:400 , marginTop:9 }} role="presentation" onClick={toggleDrawer(false)}>
      <hr/>
      <List sx={{marginBottom:30}}>
        {['Admin Panel', 'Dashboard', 'Claim', 'Message','Help'].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <ListItemButton href={`/${text.toLocaleLowerCase()}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <hr/>
      <Box sx={{display:'flex' , flexDirection:'row'}}>
      <Button><IconButton> <LogoutIcon></LogoutIcon> </IconButton> Log out</Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button sx={{color:'white'}} onClick={toggleDrawer(true)}><IconButton><MenuIcon/></IconButton></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
