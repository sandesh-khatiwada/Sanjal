import React, { useState, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Fade,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import talkGif from '/animations/talk.gif';
import '../styles/components/gifStyle.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [gifFadeIn, setGifFadeIn] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [profileImageVisible, setProfileImageVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    setFadeIn(true);
    setGifFadeIn(true);
  }, []);

  React.useEffect(() => {
    if (otpVisible) {
      otpRefs.current[0]?.focus();
    }
  }, [otpVisible]);

  const toggleFade = (callback) => {
    setFadeIn(false);
    setTimeout(() => {
      callback();
      setFadeIn(true);
    }, 300); // Match this duration to the `Fade` timeout
  };

  const handleSignUp = () => {
    if (password === confirmPassword) {
      toggleFade(() => setOtpVisible(true));
    } else {
      alert('Passwords do not match!');
    }
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

  const handleVerify = () => {
    console.log('OTP Entered:', otp.join(''));
    setIsVerified(true);

    setTimeout(() => {
      toggleFade(() => {
        setOtpVisible(false);
        setProfileImageVisible(true);
      });
    }, 1000);
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  const handleCompleteRegistration = () => {
    console.log('Profile Image:', profileImage);
    alert('Registration Completed Successfully!');
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length) {
      const file = acceptedFiles[0];
      setProfileImage(Object.assign(file, { preview: URL.createObjectURL(file) }));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, image/jpg',
    maxFiles: 1,
  });

  return (
    <>
    <Navbar />
    <Grid mt={1} container style={{ height: '100vh', overflow: 'hidden'}}>
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

      <Grid
        item
        xs={12}
        md={6}
        className="signup-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Fade in={fadeIn} timeout={300}>
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
            <Box textAlign="center" mb={7}>
              <Typography variant="h4" gutterBottom>
                {!otpVisible && !profileImageVisible
                  ? 'Create an Account'
                  : profileImageVisible
                  ? 'Upload Profile Image'
                  : 'Verify Email'}
              </Typography>
              {otpVisible && (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ fontSize: '14px', margin: '20px' }}
                >
                  Enter OTP sent to your email address
                </Typography>
              )}
            </Box>

            {!otpVisible && !profileImageVisible ? (
              <Box component="form" onSubmit={(e) => e.preventDefault()}>
                <TextField
                  label="Full Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
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
                  label="Create a Password"
                  type={passwordVisible ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setPasswordVisible(!passwordVisible)}
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
                          onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
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
                  onClick={handleSignUp}
                >
                  Continue
                </Button>
                <Box mt={2} style={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="textSecondary">
                    Already have an account?{' '}
                    <Link href="#" variant="body2" onClick={redirectToLogin}>
                      Login
                    </Link>
                  </Typography>
                </Box>
              </Box>
            ) : otpVisible ? (
              <Box component="form" onSubmit={(e) => e.preventDefault()}>
                <Box display="flex" justifyContent="space-around" mb={2}>
                  {otp.map((value, index) => (
                    <TextField
                      key={index}
                      type="text"
                      value={value}
                      onChange={(e) => handleOtpChange(e, index)}
                      variant="outlined"
                      style={{ width: '70px', textAlign: 'center' }}
                      inputProps={{ maxLength: 1 }}
                      inputRef={(el) => (otpRefs.current[index] = el)}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '1rem' }}
                  onClick={handleVerify}
                >
                  Verify
                </Button>
                {isVerified && (
                  <Box mt={2} textAlign="center">
                    <Typography variant="body2" color="green">
                      Email Verified Successfully!
                    </Typography>
                  </Box>
                )}
              </Box>
            ) : (
              <Box>
                <Box
                  {...getRootProps()}
                  style={{
                    border: '2px dashed #ccc',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <Typography variant="body2">
                      Drop the image here...
                    </Typography>
                  ) : (
                    <Typography variant="body2">
                      Drag & Drop or click to select an image
                    </Typography>
                  )}
                </Box>
                {profileImage && (
                  <Box mt={2} textAlign="center">
                    <img
                      src={profileImage.preview}
                      alt="Preview"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '200px',
                        borderRadius: '8px',
                      }}
                    />
                  </Box>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '2rem' }}
                  onClick={handleCompleteRegistration}
                >
                  Complete Registration
                </Button>
              </Box>
            )}
          </Container>
        </Fade>
      </Grid>
    </Grid>
    <Footer />
    </>
  );
};

export default SignUpPage;
