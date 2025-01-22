import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Fade,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import talkGif from '/animations/talk.gif';
import '../styles/components/gifStyle.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [fadeIn, setFadeIn] = useState(false);
  const [gifFadeIn, setGifFadeIn] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [passwordStage, setPasswordStage] = useState(false); // For "Create New Password"
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const otpRefs = useRef([]);

  React.useEffect(() => {
    setFadeIn(true);
    setGifFadeIn(true);
  }, []);

  React.useEffect(() => {
    if (otpVisible) {
      otpRefs.current[0]?.focus();
    }
  }, [otpVisible]);

  const handlePasswordReset = () => {
    console.log('Password reset requested for email:', email);
    setOtpVisible(true); // Show OTP input field
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      updatedOtp[index] = value;
      return updatedOtp;
    });

    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = () => {
    console.log('OTP Entered:', otp.join(''));
    setOtpVerified(true);

    // Display success message, then transition to password creation
    setTimeout(() => {
      setOtpVerified(false);
      setPasswordStage(true);
    }, 2000);
  };

  const handleTogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const handlePasswordSubmit = () => {
    if (newPassword === confirmPassword) {
      console.log('Password successfully reset!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <>
    <Navbar />
    <Grid container style={{ height: '100vh', overflow: 'hidden' }}>
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
            <Box textAlign="center" mb={5}>
              <Typography variant="h4" gutterBottom>
                {otpVisible
                  ? passwordStage
                    ? 'Create New Password'
                    : 'Enter OTP'
                  : 'Reset Password'}
              </Typography>
              {otpVisible && !passwordStage && (
                <Typography variant="body2" color="textSecondary" style={{ fontSize: '14px' }}>
                  Enter the OTP sent to your email address
                </Typography>
              )}
            </Box>
            {!otpVisible ? (
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
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '1rem' }}
                  onClick={handlePasswordReset}
                >
                  Submit
                </Button>
              </Box>
            ) : passwordStage ? (
              <Box>
                <TextField
                  label="Create New Password"
                  type={passwordVisible ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => handleTogglePasswordVisibility('password')}
                          edge="end"
                        >
                          {passwordVisible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Confirm Password"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => handleTogglePasswordVisibility('confirmPassword')}
                          edge="end"
                        >
                          {confirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
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
                  onClick={handlePasswordSubmit}
                >
                  Submit
                </Button>
              </Box>
            ) : (
              <Box>
                <Box display="flex" justifyContent="center" mb={2}>
                  {otp.map((_, index) => (
                    <TextField
                      key={index}
                      inputRef={(el) => (otpRefs.current[index] = el)}
                      variant="outlined"
                      style={{ width: '2.5rem', margin: '0 0.5rem' }}
                      inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(e, index)}
                    />
                  ))}
                </Box>
                {otpVerified && (
                  <Typography
                    variant="body2"
                    style={{ color: 'green', textAlign: 'center', marginBottom: '1rem' }}
                  >
                    Email Verified Successfully!
                  </Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '1rem' }}
                  onClick={handleVerifyOtp}
                >
                  Verify
                </Button>
              </Box>
            )}
          </Container>
        </Fade>
      </Grid>

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
            alt="Password Reset Animation"
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

export default PasswordReset;
