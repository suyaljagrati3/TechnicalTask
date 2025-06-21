import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      bgcolor: '#1c313a',
      color: '#fff',
      py: 3,
      mt: 5
    }}
  >
    <Container maxWidth="lg">
      <Typography align="center" variant="body2">
        © 2025 TechFest — All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
