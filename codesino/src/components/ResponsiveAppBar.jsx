import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Container, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/logo1.png';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

function ResponsiveAppBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    // 🔥 Trigger GET request
    fetch("https://codesino.onrender.com/blog/api/posts")
      .catch(error => {
        // Optional: Log errors silently (not required)
        console.error("Background GET request failed:", error);
      });

    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const socialLinks = [
    { icon: <FaFacebook />, link: 'https://www.facebook.com/codesinodev' },
    { icon: <FaTwitter />, link: 'https://www.twitter.com/codesinodev' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/codesinodev' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/company/codesinodev' },
    { icon: <FaWhatsapp />, link: `https://wa.me/2349036206457?text=Hi%20I'm%20reaching%20you%20from%20your%20website.%20I%20want%20to%20discuss%20your%20(_______)%20service` },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          padding: '10px 0'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="Codesino Logo"
                style={{
                  height: '60px',
                  width: 'auto',
                  objectFit: 'contain',
                  marginRight: '4px'
                }}
              />
              <div className="text-gradient">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    textTransform: 'none',
                    letterSpacing: '0.rem',
                    margin: 0,
                  }}
                >
                  CodesinoDev
                </Typography>
              </div>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavClick(page.path)}
                  sx={{
                    color: location.pathname === page.path ? 'red' : 'white',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={() => setIsMobileMenuOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                zIndex: 1200,
              }}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '85%',
                maxWidth: 350,
                height: '100%',
                backgroundColor: '#0d47a1',
                zIndex: 1300,
                padding: '20px',
                color: 'white',
                overflowY: 'auto',
                boxShadow: '-2px 0 10px rgba(0,0,0,0.3)',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" className='text-gradient' sx={{ color: 'white', fontWeight: 900 }}>
                  Mobile Menu
                </Typography>
                <IconButton onClick={() => setIsMobileMenuOpen(false)} sx={{ color: 'white' }}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {pages.map((page) => (
                  <Box
                    key={page.name}
                    sx={{
                      backgroundColor: '#1565c0',
                      borderRadius: '12px',
                      padding: '10px 15px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}
                  >
                    <Button
                      onClick={() => handleNavClick(page.path)}
                      sx={{
                        color: location.pathname === page.path ? 'violet' : 'white',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        textTransform: 'none',
                        width: '100%',
                        justifyContent: 'flex-start',
                      }}
                    >
                      {page.name}
                    </Button>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 5, backgroundColor: '#1976d2', borderRadius: '12px', p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>Contact</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography>contact@codesinodev.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography>+234 903 620 6457</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 5, backgroundColor: '#1e88e5', borderRadius: '12px', p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>Follow Us</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((item, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'white' }}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ResponsiveAppBar;
