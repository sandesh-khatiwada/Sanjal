import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: '2rem 0' , margin: '15px'}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Sanjal
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Sanjal is a social media platform that allows users to connect, share, discover, and engage with people around the world.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link href="/about" color="textSecondary" underline="hover">About Us</Link>
              </li>
              <li>
                <Link href="/privacy" color="textSecondary" underline="hover">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" color="textSecondary" underline="hover">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact" color="textSecondary" underline="hover">Contact</Link>
              </li>
            </ul>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://www.facebook.com" target="_blank" color="primary">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.twitter.com" target="_blank" color="primary">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" color="primary">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com" target="_blank" color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Join Our Newsletter
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Subscribe to our newsletter for the latest updates and news from Sanjal.
            </Typography>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '10px',
                width: '100%',
                marginTop: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                background : 'white',
                color:'black'
              }}
            />
            <button
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#F06543',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Sanjal. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
