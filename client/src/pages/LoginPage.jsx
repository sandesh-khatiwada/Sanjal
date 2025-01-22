import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Fade, Link, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import icons
import talkGif from '/animations/talk.gif'; 
import '../styles/components/gifStyle.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [fadeIn, setFadeIn] = useState(false);
  const [gifFadeIn, setGifFadeIn] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setFadeIn(true);
    setGifFadeIn(true);
  }, []);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/feed');
    // Add login logic here
  };

  const redirectToSignUp = () => {
    navigate('/signup');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle the password visibility
  };

  return (
    <>
    <Navbar />
    <Grid container style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Left Side: Login Container */}
      <Grid
        item
        xs={12}
        md={6}
        mt={2}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Fade in={fadeIn} timeout={1000}>
          <Container
            maxWidth="xs"
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid #ccc',
            }}
          >
            <Box textAlign="center" mb={2}>
              <Typography variant="h4" gutterBottom>
                Login to Sanjal
              </Typography>
            </Box>
            <Box component="form" onSubmit={(e) => e.preventDefault()}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'} // Toggle the type between 'text' and 'password'
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '1rem' }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Box mt={2} style={{ textAlign: 'right' }}>
              <Link
  href="#"
  variant="body2"
  onClick={() => navigate('/password-reset')}
>
  Forgot Password?
</Link>
              </Box>
              <Box mt={2} style={{ textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">
                  Don't have an account?{' '}
                  <Link href="#" variant="body2" onClick={redirectToSignUp}>
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Fade>
      </Grid>

      {/* Right Side: GIF */}
      <Grid
        item
        xs={12}
        md={6}
        mt={2}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={gifFadeIn} timeout={2000}>
          <img
            src={talkGif}
            alt="Talking Animation"
            className="talk-gif"
            style={{ maxWidth: '100%', maxHeight: '70%', objectFit: 'contain' }}
          />
        </Fade>
      </Grid>
    </Grid>
    <Footer />
    </>
  );
};

export default LoginPage;
