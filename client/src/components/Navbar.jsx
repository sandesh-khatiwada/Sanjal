import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logoPlaceholder from '/images/logo.png';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'rgba(255, 255, 255, 0.87)' }}>
      <Toolbar>
        {/* Logo on the left */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1, // Push the buttons to the right
          }}
        >
          <img
            src={logoPlaceholder}
            alt="Sanjal Logo"
            style={{ height: '40px', marginRight: '8px' }}
          />
          <Typography variant="h2" component="span">
            Sanjal
          </Typography>
        </Box>

        {/* Buttons on the right */}
        <Box>
          <Button
            component={Link}
            to="/login"
            sx={{
              color: '#E8E9EB',
              backgroundColor: '#F06543',
              marginRight: '8px',
              '&:hover': {
                backgroundColor: '#F09D51',
              },
            }}
          >
            Log In
          </Button>
          <Button
            component={Link}
            to="/signup"
            sx={{
              color: '#E8E9EB',
              backgroundColor: '#313638',
              border: '1px solid #F06543',
              '&:hover': {
                backgroundColor: '#F06543',
                color: '#E0DFD5',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
