import { Button, TextField } from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {authActions} from '../store';
import {useDispatch} from 'react-redux';

const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleSubmit = ()=>{
        navigate('/dashboard')
        dispatch(authActions.login())
    }
    
    return (
        <div className='register-container'>
            <img className='login-img' src='\images\login_page.jpg' alt='#'/>
            <div className='register-sub-container'>
                <TextField type='email' placeholder='Enter your email ID' />
                <TextField type='password' placeholder='Password'/>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Login;