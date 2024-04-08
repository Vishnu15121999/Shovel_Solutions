import { Autocomplete, Box, Input, TextField, Typography } from '@mui/material';
import React from 'react'

const HospitalSecondForm = () => {


    const options=['India','Nepal','USA','Spain','United Kingdom','Germany']
  return (
    <div style={{width:'80%' , margin:'0 auto' , marginTop:'30px'}}>
        <Box sx={{margin:'10px 0px'}}>
            <Typography>Hospital Name</Typography>
            <TextField sx={{width:'100%'}}/>
        </Box>
        <Box sx={{margin:'10px 0px'}}>
            <Typography>About Company</Typography>
            <TextField sx={{width:'100%'}}/>
        </Box>
        <Box sx={{width:'100%'}}>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , margin:'10px 0px'}}>
                <Box sx={{width:'45%'}}>
                    <Typography>E-mail Address</Typography>
                    <TextField type='text' sx={{width:'100%'}}/>
                </Box>
                <Box sx={{width:'45%'}}>
                    <Typography>Phone No.</Typography>
                    <TextField type='number' sx={{width:'100%'}}/>
                </Box>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , margin:'10px 0px'}}>
                <Box sx={{width:'45%'}}>
                    <Typography>Country</Typography>
                    <Autocomplete options={options} renderInput={(params) => (<TextField {...params} label="" variant="standard" />)}/>
                </Box>
                <Box sx={{width:'45%'}}>
                    <Typography>City</Typography>
                    <Autocomplete options={options} renderInput={(params) => (<TextField {...params} label="" variant="standard" />)}/>
                </Box>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , margin:'10px 0px'}}>
                <Box sx={{width:'45%'}}>
                    <Typography>Workforce Size</Typography>
                    <TextField sx={{width:'100%'}}/>
                </Box>
                <Box sx={{width:'45%'}}>
                    <Typography>Location</Typography>
                    <TextField sx={{width:'100%'}}/>
                </Box>
            </Box>
            <Box sx={{margin:'10px 0px'}}>
                <Typography>Company Website</Typography>
                <TextField sx={{width:'100%'}}/>
            </Box>
        </Box>
    </div>
  )
}

export default HospitalSecondForm;