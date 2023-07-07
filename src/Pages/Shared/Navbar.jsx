import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#800080' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nandini Das Rima
        </Typography>
        <Button color="inherit" component="a" href="/">
          Home
        </Button>
        <Button color="inherit" component="a" href="#about">
          About
        </Button>
        <Button color="inherit" component="a" href="#projects">
          Projects
        </Button>
        <Button color="inherit" component="a" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
