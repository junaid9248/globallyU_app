import { useState } from 'react'
import {Container, Typography, Box, FormControl, InputLabel,TextField, Button, InputAdornment, IconButton, FilledInput, OutlinedInput, FormHelperText} from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers'

export default function Signup(){

    return(
        <Box
        sx={{display: 'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            backgroundColor:'black',
            padding:"1rem"}}>

            <Typography component="h1" variant="h4"
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}> Sign Up</Typography>
            
            <FormControl variant='outlined'>
            <FormHelperText variant='outlined'> First Name </FormHelperText>
                <OutlinedInput
                type='text'
                placeholder='First Name'
                sx={{ input: { color: 'white' }, placeholder:{color:'white'}}} />
            </FormControl>

            <FormControl>
            <OutlinedInput
                type='text'
                placeholder='Last Name'
                sx={{ input: { color: 'white' }, placeholder:{color:'white'}}} />
            </FormControl>

            <FormControl color='white'>
                <FormHelperText> Date of Birth</FormHelperText>
                <DatePicker
                sx={{input:{color:'white'}}} />
            </FormControl>

        
        </Box>
    )
}