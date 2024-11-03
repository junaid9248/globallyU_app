import { useState } from 'react'
import {createTheme,ThemeProvider, Typography, Box, FormControl,TextField, Button, OutlinedInput, MenuItem, AppBar, Toolbar} from "@mui/material"
import Logo from "../assets/appbarlogo-removebg.png"

export default function Home(){
    return(
        <>
        <AppBar position='static'
        
        sx={{background: "linear-gradient(89.8deg, rgb(190, 55, 129) 11%, rgb(90, 43, 186) 83.4%)"}}>


            <Toolbar position='static'>
                <Box component='img'
                sx={{height: '20vh'}}
                alt="globallU-logo"
                src={Logo}>


                </Box>

                <Typography> Connect & Network </Typography>
                <Typography> Events </Typography>
                <Typography> Information </Typography>

                <Button type='filled' color='red'> Log In </Button>
                <Button type='contained' color='success'> Sign up </Button>


            </Toolbar>
        </AppBar>
        </>
    )
}