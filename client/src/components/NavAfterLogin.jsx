import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Home, People, Chat, PersonAdd, ExitToApp } from '@mui/icons-material'; // Example icons

const NavAfterLogin = () => {
  return (
    <AppBar position="sticky"  style={{ backgroundColor: 'rgb(2 1 1)' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around' }}>
          <IconButton color="inherit">
            <Home />
            <Typography variant="caption">Feed</Typography>
          </IconButton>
          <IconButton color="inherit">
            <People />
            <Typography variant="caption">Friends</Typography>
          </IconButton>
          <IconButton color="inherit">
            <Chat />
            <Typography variant="caption">Chat</Typography>
          </IconButton>
          <IconButton color="inherit">
            <PersonAdd />
            <Typography variant="caption">Find New People</Typography>
          </IconButton>
          <IconButton color="inherit">
            <ExitToApp />
            <Typography variant="caption">Log Out</Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavAfterLogin;
