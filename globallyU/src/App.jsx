import { useState } from 'react'
import {Container, Typography, Box} from "@mui/material"
import LoginBox from './login_page/login'
import { ContentBox } from './login_page/login'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container sx={{display: 'flex', 
    flexDirection: 'row', 
    justifyContent:'space-evenly', 
    alignItems:'center', 
  
    height:'80vh', 
    width:'80vw',
    backgroundColor:'blue'}}>
      
    <ContentBox />
    <LoginBox />
    
    </Container>
  )
}

export default App
