import { useState } from 'react'
import {Container, Typography, Box, FormControl, InputLabel, Input,FormHelperText, TextField} from "@mui/material"

export default function LoginBox(){
    
    return(
        <Box sx={{display: 'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',backgroundColor:'tomato'}}>
            <Typography component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Welcome Back!
        </Typography>

        <Typography component="h2"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Username
        </Typography>

        <FormControl>
            
            <TextField label="Username:"> </TextField>
            <TextField label="Password:"> </TextField>
            
        </FormControl>
        </Box>  
    )
}

export function ContentBox(){
    return(
    <Box sx={{backgroundColor:'black'}}>
        <Typography component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
content        </Typography>
      
        
    </Box>
    )  
}