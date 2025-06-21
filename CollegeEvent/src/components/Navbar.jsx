import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'Event Details', to: '/details', icon: <EventIcon /> },
  { label: 'Register', to: '/register', icon: <HowToRegIcon /> },
  { label: 'Contact', to: '/contact', icon: <ContactMailIcon /> },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{ background: 'linear-gradient(90deg, #1e3c72, #2a5298)' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <CelebrationIcon sx={{ color: '#fff' }} />
            <Typography variant="h6" fontWeight={600} color="white">
              TechFest 2025
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                  <List>
                    {navLinks.map(({ label, to, icon }) => (
                      <ListItem button key={label} component={Link} to={to}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box display="flex" gap={2}>
              {navLinks.map(({ label, to, icon }) => (
                <Button
                  key={label}
                  component={Link}
                  to={to}
                  startIcon={icon}
                  sx={{
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: 2,
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
