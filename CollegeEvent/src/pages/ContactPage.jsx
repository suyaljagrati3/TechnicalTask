import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
  Place,
} from '@mui/icons-material';

const bgUrl = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(8px)',
            borderRadius: 4,
            boxShadow: 5,
            p: 4,
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 3, fontSize: isMobile ? '1.8rem' : '2.5rem' }}
          >
            Contact Us
          </Typography>

          <Typography sx={{ mb: 1.5 }}>
            <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
            <strong>Venue:</strong> College Auditorium, UPES, Dehradun
          </Typography>

          <Typography sx={{ mb: 1.5 }}>
            <Phone sx={{ verticalAlign: 'middle', mr: 1 }} />
            <strong>Phone:</strong> +91 98765 43210
          </Typography>

          <Typography sx={{ mb: 3 }}>
            <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
            <strong>Email:</strong> info@techfest.co
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, mb: 1 }}>
            Follow us
          </Typography>
          <Box>
            {[Facebook, Twitter, LinkedIn].map((Icon, idx) => (
              <IconButton
                key={idx}
                href="#"
                sx={{
                  color: 'white',
                  border: '1px solid white',
                  m: 1,
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#1976d2',
                  },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
