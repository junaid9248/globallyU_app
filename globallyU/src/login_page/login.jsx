import { useState } from 'react'
import { Typography, Box, FormControl, Button, InputAdornment, IconButton,createTheme, OutlinedInput, ThemeProvider} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { pink, lightGreen } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function LoginBox(){

    const myTheme = createTheme({

        palette:{
    
            primary:{
                light: '#f9f9f9',
                dark:'#ff3131',
                main: "#4a148c"
    
            },
            secondary:{
                main: pink[700]}
        },
    })
   
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
    //To navigate to signup page
    const nav = useNavigate()
    const routeSignup =()=>{
        nav('/signup')
    }
    //To show/hide the password input
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event) => {
        event.preventDefault();
      };
      
    return(
        <ThemeProvider theme={myTheme}>
        <Box sx={{display: 'flex',
            flexDirection:'row-reverse', 
            justifyContent:'center', 
            alignItems:'center',
            backgroundColor:'primary.light',
            padding:"1rem",}}>

            <Box sx={{display: 'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            backgroundColor:'primary.main',
            height:'90vh',
            borderRadius:'0px 16px 16px 0px'
            }}>

                <Typography component="h1"
                variant="h4"
                sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
                Welcome Back!
                </Typography>
                
                <FormControl onSubmit={onSubmitHandler}>

                    <FormControl variant='outlined'>

                        <OutlinedInput
                        type='text'
                        placeholder='Username'
                        required
                        sx={{ input: { color: 'white' }, placeholder:{color:'white'}}}
                        onChange={(e)=>{{setUsername(e.target.value), console.log(username)}}}>
                        </OutlinedInput>

                    </FormControl>
                    
                    <FormControl>
                        <OutlinedInput 
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        sx={{margin: "" ,input: { color: 'white' }, label:{color:'white'}, placeholder:{color:'white'}}}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility" 
                                sx={{color: "white"}}
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }>
                            
                        </OutlinedInput>

                    </FormControl>

                    <Button id="login_button"
                    variant="contained" 
                    color="success"
                    onClick={onSubmitHandler}
                    startIcon={<LoginIcon />}>Login</Button>
                    
                </FormControl>

                <Box sx={{display: 'flex',
                        flexDirection:'column', 
                        justifyContent:'center', 
                        alignItems:'center',
                        margin:"1rem"}}>
                <Typography component="h1"
                sx={{ width: '100%', fontSize: 'clamp(1rem, 5vw, 1.5rem)' }}>
                Don't have an account yet?
                </Typography>
                
                <Button 
                id="login_button" 
                variant="contained" 
                color="secondary" 
                startIcon={<AutoAwesomeIcon />}
                onClick={routeSignup}
                >Sign Up</Button>
                </Box>

            </Box> 


            <Box
            sx={{
                backgroundImage:"url('public/logincover1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius:" 16px 0px 0px 16px",
                height: "90vh",
                width: "70vw"
            }}>
            </Box>

        </Box> 
        </ThemeProvider>
    )
}