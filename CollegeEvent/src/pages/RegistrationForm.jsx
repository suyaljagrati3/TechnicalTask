import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const bgUrl = 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg';

const Register = () => {
  const [data, setData] = useState({ name: '', email: '', phone: '', college: '' });
  const [ok, setOk] = useState(false);
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handle = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Name is required';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email))
      newErrors.email = 'Enter a valid email';
    if (!/^\d{10}$/.test(data.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!data.college.trim()) newErrors.college = 'College name is required';
    return newErrors;
  };

const submit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setOk(false);
  } else {
    setOk(true);
    setData({ name: '', email: '', phone: '', college: '' }); // clear fields
  }
};


  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 1,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.95)',
            p: 4,
            borderRadius: 3,
            boxShadow: 4,
            backdropFilter: 'blur(6px)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#0d47a1',
            }}
          >
            Registration Form
          </Typography>

          <Box component="form" onSubmit={submit} sx={{ display: 'grid', gap: 2 }}>
            {['name', 'email', 'phone', 'college'].map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={data[field]}
                onChange={handle}
                required
                fullWidth
                error={!!errors[field]}
                helperText={errors[field]}
              />
            ))}

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(to right, #00bcd4, #2196f3)',
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(to right, #2196f3, #00bcd4)',
                },
              }}
            >
              Submit
            </Button>
          </Box>

          {ok && (
            <Alert severity="success" sx={{ mt: 3 }}>
              🎉 Registration Successful! We’ll get in touch with you shortly.
            </Alert>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
