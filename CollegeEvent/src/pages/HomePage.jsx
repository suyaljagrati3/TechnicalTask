import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import features from '../data/features';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', py: 10 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: isMobile ? '2rem' : '3rem',
                color: '#0d47a1',
              }}
            >
              Welcome to TechFest 2025
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: '#444' }}>
              India’s biggest student-led technology festival is here! Compete in real-world challenges, explore innovation, and join hands-on workshops.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(to right, #00bcd4, #2196f3)',
                color: '#fff',
                px: 5,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(to right, #2196f3, #00bcd4)',
                },
              }}
              onClick={() => navigate('/register')}
            >
              Register Now
            </Button>
          </Grid>

          {/* Hero Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={features[0].image}
              alt={features[0].title}
              sx={{
                width: '100%',
                height: 400,
                borderRadius: 3,
                objectFit: 'cover',
                boxShadow: 4,
              }}
            />
          </Grid>
        </Grid>

        {/* 🕒 Date, Time & Venue Section */}
        <Box
          sx={{
            textAlign: 'center',
            backgroundColor: '#e3f2fd',
            borderRadius: 3,
            p: 4,
            mb: 10,
          }}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#0d47a1' }}>
            📅 When & Where
          </Typography>
          <Typography variant="body1" sx={{ color: '#333' }}>
            <strong>Date:</strong> July 25 – 26, 2025
          </Typography>
          <Typography variant="body1" sx={{ color: '#333' }}>
            <strong>Time:</strong> 9:00 AM – 6:00 PM (Both Days)
          </Typography>
          <Typography variant="body1" sx={{ color: '#333' }}>
            <strong>Venue:</strong> College Auditorium, UPES, Dehradun
          </Typography>
        </Box>

        {/* Features Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            What’s in TechFest?
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Explore the exciting categories at TechFest 2025
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 3,
                  boxShadow: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
