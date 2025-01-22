import React, { useState } from 'react';
import {
  Container,
  TextField,
  Box,
  IconButton,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Menu,
  MenuItem,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Collapse,
} from '@mui/material';
import { PhotoCamera, SentimentSatisfied, Close, ThumbUp, Comment } from '@mui/icons-material';
import NavAfterLogin from '../components/NavAfterLogin';

const Feed = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [likedPosts, setLikedPosts] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  const feelings = {
    happy: '😊',
    excited: '😄',
    hopeful: '🤞',
    energized: '⚡',
    sad: '😢',
    angry: '😡',
    optimistic: '🌈',
  };

  const users = [
    { 
      name: 'John Doe', 
      profilePic: 'https://picsum.photos/50', 
      feeling: 'happy', 
      content: 'Just finished a great workout!', 
      time: '5 mins ago',
      postImages: ['https://picsum.photos/200/200?1', 'https://picsum.photos/200/200?2']
    },
    { 
      name: 'Jane Smith', 
      profilePic: 'https://picsum.photos/51', 
      feeling: 'excited', 
      content: 'Launch day for our new project!', 
      time: '1 hour ago',
      postImages: ['https://picsum.photos/200/200?3']
    },
    { 
      name: 'Tom Wilson', 
      profilePic: 'https://picsum.photos/52', 
      feeling: 'hopeful', 
      content: 'Starting my new job today! Wish me luck!', 
      time: '2 hours ago',
      postImages: ['https://picsum.photos/200/200?4', 'https://picsum.photos/200/200?5']
    },
  ];

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setErrorMessage('');
  };

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleUploadPhotos = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + photos.length > 5) {
      setErrorMessage('You can not upload more than 5 photos at once');
      return;
    }

    setErrorMessage('');
    const updatedPhotos = [...photos, ...files];
    if (updatedPhotos.length <= 5) {
      setPhotos(updatedPhotos);
    }
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  const handleFeelingClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleFeelingSelect = (feeling) => {
    setSelectedFeeling(feeling);
    setMenuAnchor(null);
  };

  const handleLikePost = (index) => {
    setLikedPosts((prevState) => {
      const updatedLikes = [...prevState];
      if (updatedLikes.includes(index)) {
        updatedLikes.splice(updatedLikes.indexOf(index), 1); // Unlike the post
      } else {
        updatedLikes.push(index); // Like the post
      }
      return updatedLikes;
    });
  };

  const handleCommentToggle = (index) => {
    setCommentOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = (index) => {
    if (!comments[index]) {
      setComments((prevState) => ({
        ...prevState,
        [index]: [],
      }));
    }
    setComments((prevState) => ({
      ...prevState,
      [index]: [...prevState[index], newComment],
    }));
    setNewComment('');
  };

  const isPostEnabled = postContent.trim() !== '' || photos.length > 0 || selectedFeeling !== '';

  return (
    <>
      <NavAfterLogin />
      <Container sx={{ mt: 4 }}>
        {/* What's on your Mind Section */}
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
          }}
        >
          <Typography variant="h6" mb={1}>
            What's on your mind?
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Write something..."
            multiline
            rows={1}
            sx={{ mb: 1 }}
            onClick={handleOpenDialog}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton color="primary" onClick={handleOpenDialog} disableFocusRipple>
              <PhotoCamera />
              <Typography variant="caption">Photo</Typography>
            </IconButton>
            <IconButton color="primary" onClick={handleOpenDialog} disableFocusRipple>
              <SentimentSatisfied />
              <Typography variant="caption">Feeling/Activity</Typography>
            </IconButton>
          </Box>
        </Box>

        {/* User Posts */}
        <Box sx={{ mt: 3 }}>
          {users.map((user, index) => (
            <Card key={index} sx={{ marginBottom: 3, boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={user.profilePic} alt={user.name} sx={{ width: 40, height: 40, marginRight: 2 }} />
                  <Typography variant="body1" fontWeight="bold">{user.name}</Typography>
                  <Typography variant="body2" sx={{ marginLeft: 2, color: 'gray' }}>{user.time}</Typography>
                </Box>
                {user.feeling && (
                  <Typography variant="body2" sx={{ color: 'gray', marginTop: 1 }}>
                    {feelings[user.feeling]} {user.feeling}
                  </Typography>
                )}
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  {user.content}
                </Typography>

                {/* Post Images */}
                {user.postImages && (
                  <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
                    {user.postImages.map((image, i) => (
                      <CardMedia
                        key={i}
                        component="img"
                        src={image}
                        alt={`Post Image ${i}`}
                        sx={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '8px' }}
                      />
                    ))}
                  </Box>
                )}
              </CardContent>

              {/* Post Actions */}
              <CardActions>
                <IconButton onClick={() => handleLikePost(index)}>
                  <ThumbUp color={likedPosts.includes(index) ? 'primary' : 'inherit'} />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    {likedPosts.includes(index) ? 'Unlike' : 'Like'}
                  </Typography>
                </IconButton>
                <IconButton onClick={() => handleCommentToggle(index)}>
                  <Comment />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>
                    Comment
                  </Typography>
                </IconButton>
              </CardActions>

              {/* Comments Section */}
              <Collapse in={commentOpen[index]} timeout="auto" unmountOnExit>
                <Box sx={{ padding: 2, borderTop: '1px solid #ccc' }}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={handleCommentChange}
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" color="primary" onClick={() => handlePostComment(index)} disabled={!newComment.trim()}>
                    Post Comment
                  </Button>
                  <Box sx={{ mt: 2 }}>
                    {comments[index] && comments[index].map((comment, i) => (
                      <Typography key={i} variant="body2" sx={{ marginBottom: 1 }}>
                        {comment}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Collapse>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Dialog Box */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        fullWidth
        BackdropProps={{
          invisible: true,
        }}
        PaperProps={{
          sx: {
            backdropFilter: 'blur(5px)',
            borderRadius: '12px',
            padding: '16px',
            position: 'relative',
          },
        }}
        disableEscapeKeyDown
      >
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Create New Post
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Write something..."
            multiline
            rows={4}
            sx={{ mb: 2 }}
            value={postContent}
            onChange={handleInputChange}
          />
          {photos.length > 0 && (
            <Box
              sx={{
                display: 'flex',
                overflowX: 'scroll',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                mb: 2,
                gap: 1,
              }}
            >
              {photos.map((file, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src={URL.createObjectURL(file)}
                    alt={`Uploaded ${index}`}
                    sx={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                  <IconButton
                    onClick={() => handleRemovePhoto(index)}
                    sx={{
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%',
                    }}
                  >
                    <Close fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
          {errorMessage && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Typography>
          )}
          {selectedFeeling && (
            <Typography
              variant="subtitle1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'textSecondary',
                mb: 2,
              }}
            >
              {feelings[selectedFeeling]} Feeling {selectedFeeling}
            </Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 2 }}>
            <IconButton component="label" color="primary" size="large">
              <PhotoCamera fontSize="large" />
              <input
                hidden
                accept="image/jpeg, image/png"
                type="file"
                multiple
                onChange={handleUploadPhotos}
              />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={handleFeelingClick}
            >
              <SentimentSatisfied fontSize="large" />
            </IconButton>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isPostEnabled}
            onClick={handleCloseDialog}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Feed;
