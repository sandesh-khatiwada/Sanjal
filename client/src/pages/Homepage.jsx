import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Welcome to Sanjal
        </Typography>
      </Box>

      <Box mt={5}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0 }} // initial opacity is 0 (invisible)
              animate={{ opacity: 1 }} // animate to full opacity (visible)
              transition={{ duration: 2.5 }} // duration of the animation
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="Connect"
                  image="/images/connect.png" // Use an actual image path
                  sx={{
                    transition: 'transform 0.3s ease', // Add smooth transition
                    '&:hover': {
                      transform: 'scale(1.1)', // Zoom-in effect
                    },
                    cursor: 'text', // Change cursor to 'I'
                  }}
                />
                <CardContent>
                  <Typography variant="h6">Connect with People</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Meet new people, create friendships, and strengthen connections with your loved ones.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="Share"
                  image="/images/share.png"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                    cursor: 'text',
                  }}
                />
                <CardContent>
                  <Typography variant="h6">Share Your Life</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Share photos, posts, and updates with your followers. Tell your story and be heard.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="Discover"
                  image="/images/discover.png"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                    cursor: 'text',
                  }}
                />
                <CardContent>
                  <Typography variant="h6">Discover New Ideas</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Explore new topics, trends, and ideas from people around the world. Learn, grow, and be inspired.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="Engage"
                  image="/images/engage.png"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                    cursor: 'text',
                  }}
                />
                <CardContent>
                  <Typography variant="h6">Engage with Content</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Like, comment, and share posts that resonate with you. Stay engaged with the content that matters to you.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Join the Sanjal Community Today!
        </Typography>
        <Typography variant="body1" paragraph>
          Ready to experience everything Sanjal has to offer? Join now and start building your connections, sharing your story, and discovering new people and content!
        </Typography>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="primary"
          style={{ marginTop: '1rem' }}
        >
          Join Now
        </Button>
      </Box>
    </Container>
    <Footer />
    </>
  );
};

export default Homepage;
