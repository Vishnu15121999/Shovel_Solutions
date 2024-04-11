import { AppBar, IconButton , Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';
import TemporaryDrawer from './TemporaryDrawer'
import { Avatar} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  //console.log(isLoggedIn);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut=()=>{
    dispatch(authActions.logout())
    navigate('/register')
  }

  const userName=localStorage.getItem('userName')

  return (
    <div>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TemporaryDrawer/>
            <h2 onClick={() => navigate('/')} style={{ fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}>Shovel</h2>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {!isLoggedIn && <><Button LinkComponent={Link} to='/register' variant='contained' color='warning'>Register</Button>
            <Button LinkComponent={Link} to='/login' variant='contained' color='warning'>Login</Button></>}
            {isLoggedIn && 
            <>
              <Box>
                <Tooltip title='Account Setting'>
                  <IconButton onClick={handleClick}>
                    <Avatar>{userName.split('')[0]}</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose} PaperProps={{ elevation:0, sx:{padding:'0px 20px' , overflow:'visible' , mr:5}}}>
                <MenuItem><Button>Profile</Button></MenuItem> 
                <MenuItem><Button>Setting</Button></MenuItem>
                <MenuItem><Button onClick={handleLogOut}>Logout</Button></MenuItem>
              </Menu>
            </>}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Header;

//<Button onClick={()=>dispatch(authActions.logout())} variant='contained' color='warning'>Logout</Button>