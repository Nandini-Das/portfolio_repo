import React from 'react';
import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material';

const Navbar = () => {
  const HoverButton = styled(Button)({
    '&:hover': {
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
      borderRadius: '50%',
      backgroundColor: 'orange',
    },
  });

  return (
    <AppBar position="static" sx={{ backgroundColor: '#800080' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography>
            Nandini Das Rima
        </Typography>
        <div>
          <HoverButton color="inherit" component="a" href="/">
            Home
          </HoverButton>
          <HoverButton color="inherit" component="a" href="#about">
            About
          </HoverButton>
          <HoverButton color="inherit" component="a" href="#contact">
            Contact
          </HoverButton>
          <HoverButton color="inherit" component="a" href="#projects">
            Projects
          </HoverButton>
          <HoverButton color="inherit" component="a" href="#education">
            Education & Achievements
          </HoverButton>
        </div>
        <HoverButton color="inherit" component="a" href="res.pdf">
          Resume
        </HoverButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
