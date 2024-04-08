import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';
import TemporaryDrawer from './TemporaryDrawer'

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);

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
            {isLoggedIn && <Button onClick={()=>dispatch(authActions.logout())} variant='contained' color='warning'>Logout</Button>}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;