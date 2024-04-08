import { Button, TextField } from '@mui/material';
import React from 'react'

const Login = () => {
    return (
        <div className='register-container'>
            <img className='login-img' src='\images\login_page.jpg' alt='#'/>
            <div className='register-sub-container'>
                <TextField type='email' placeholder='Enter your email ID' />
                <TextField type='password' placeholder='Password'/>
                <Button>Submit</Button>
            </div>
        </div>
    )
}

export default Login;