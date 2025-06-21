import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RuleIcon from '@mui/icons-material/Gavel';

const imgUrl = 'https://images.pexels.com/photos/1181322/pexels-photo-1181322.jpeg';

const EventDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sections = [
    {
      icon: <EventIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
      title: 'Schedule',
      items: [
        '10:00 AM – Inauguration',
        '11:00 AM – Keynote',
        '12:00 PM – Hackathon',
        '03:00 PM – Workshops',
        '05:00 PM – Prizes',
      ],
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#fbc02d' }} />,
      title: 'Prizes',
      items: ['🥇 ₹50,000', '🥈 ₹30,000', '🥉 ₹10,000'],
    },
    {
      icon: <RuleIcon sx={{ fontSize: 40, color: '#ff7043' }} />,
      title: 'Rules & Guidelines',
      items: [
        'Bring your valid college ID card.',
        'Each team can have up to 4 members.',
        'No plagiarism in code.',
        'Follow all workshop safety instructions.',
        'Be respectful to mentors & staff.',
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'start',
        pt: 12,
        pb: 8,
        color: '#ffffff',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 3, fontSize: isMobile ? '2rem' : '3rem' }}
        >
          Event Details
        </Typography>

        <Typography sx={{ mb: 5, fontSize: '1.1rem', color: '#e0e0e0' }}>
          TechFest 2025 is a premier inter-college event packed with innovation, creativity,
          and learning. From hackathons to expert-led workshops and inspiring exhibits —
          this is where technology meets talent!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {sections.map((section, i) => (
            <Card
              key={i}
              sx={{
                width: 320,
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                borderRadius: 3,
                boxShadow: 6,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {section.icon}
                </Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {section.title}
                </Typography>
                {section.items.map((text, idx) => (
                  <Typography key={idx} sx={{ fontSize: '0.95rem', mb: 0.5 }}>
                    {text}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default EventDetails;
