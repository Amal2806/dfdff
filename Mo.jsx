import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}align='left'>
          <Link to="/" style={{color:'white', textDecoration:'none'}}>
          Students</Link>
        </Typography>
        <Button color="inherit">
          <Link to="/addstudents" style={{color:'white'}}>add</Link>
          </Button>
        <Button color="inherit">
          <Link to="/read" style={{color:'white'}}>view</Link>
          </Button>
          
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Nav

