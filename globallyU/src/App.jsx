import { useState } from 'react'
import {Container, Typography, Box} from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import LoginBox from './login_page/login'
import { ContentBox } from './login_page/login'
import Signup from './signup_page/signup'

function App() {

  return (
<LocalizationProvider dateAdapter={AdapterDayjs}> 
    <BrowserRouter>
      <Routes>
        <Route path='/' 
        element={
          <Container 
            sx={{display: 'flex', 
            flexDirection: 'row', 
            justifyContent:'space-evenly', 
            alignItems:'center', 
            height:'80vh', 
            width:'80vw',
            backgroundColor:'antiquewhite'}}>
      
            <ContentBox />
            <LoginBox />
      
          </Container>}/>

        <Route path ='signup' element={<Signup />}/>
          
      </Routes>
    </BrowserRouter>
    </LocalizationProvider>
  )
}

export default App
