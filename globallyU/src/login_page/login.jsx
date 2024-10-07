import { useState } from 'react'
import {Container, Typography, Box, FormControl, TextField, Button} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

export default function LoginBox(){
   
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")   
    const [user, setUser] = useState({ 
        user_name : username,
        user_pass : password})

    const updatedValue ={
        user_name : username,
        user_pass : password
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        setUser(updatedValue)
        console.log(user)
    }

    return(
        <Box sx={{display: 'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            backgroundColor:'black',
            padding:"1rem",
            height:'70vh'}}>

            <Box sx={{display: 'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            }}>

                <Typography component="h1"
                variant="h4"
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
                Welcome Back!
                </Typography>
                
                <FormControl onSubmit={onSubmitHandler}>

                    <TextField id="outlined-username-input" 
                    required 
                    label={"Username"}
                    variant="filled"
                    color='success'
                    margin='normal'
                    focused
                    sx={{ input: { color: 'white' } }}
                    onChange={(e)=>{{setUsername(e.target.value), console.log(username)}}}> </TextField>

                    <TextField id="outlined-password-input" 
                    required label="Password" 
                    variant="filled"
                    color='success'
                    focused
                    margin='normal'
                    sx={{ input: { color: 'white' } }}
                    onChange={(e)=>{setPassword(e.target.value)}}> </TextField>

                    <Button id="login_button"
                    variant="contained" 
                    color="success"
                    onClick={onSubmitHandler}
                    startIcon={<LoginIcon />}>Login</Button>
                    
                </FormControl>

            </Box> 

            <Box sx={{display: 'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            margin:"1rem"}}>
                <Typography component="h1"
                sx={{ width: '100%', fontSize: 'clamp(1rem, 5vw, 1.5rem)' }}>
                Don't have an account yet?
                </Typography>
                
                <Button id="login_button" variant="contained" color="secondary" startIcon={<AutoAwesomeIcon />}>Sign Up</Button>
            </Box>

        </Box> 
    )
}

export function ContentBox(){
    return(
    <Box sx={{
        backgroundImage: "url(https://t3.ftcdn.net/jpg/09/88/66/02/240_F_988660289_N6poGENEXmJ6ZfzRifemSOSCNqcxIM9b.jpg)",
        backgroundRepeat: "no-repeat",
        objectFit:'cover'}}>

    </Box>
    )  
}