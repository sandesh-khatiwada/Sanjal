import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PasswordReset from './pages/PasswordReset';
import Feed from './pages/Feed';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Homepage />} />
          {/* Login Page Route */}
          <Route path="/login" element={<LoginPage />} />
          {/* Signup Page Route */}
          <Route path="/signup" element={<SignupPage />} />
          {/* Password Reset Route */}
          <Route path="/password-reset" element={<PasswordReset />} />
          {/* Feed Page Route */}
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
