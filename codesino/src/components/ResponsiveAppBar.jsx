import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../assets/images/logo2.png';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    if (path) {
      navigate(path);
    }
  };

  return (
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
          {/* Logo with Text on Left */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img 
              src={logo} 
              alt="Codesino Logo" 
              style={{ 
                height: '60px',
                width: 'auto',
                objectFit: 'contain',
                marginRight: '10px'
              }} 
            />
            <div className="text-gradient">
              <Typography
                variant="h4"
                sx={{
                  display: { xs: 'block', sm: 'block' },
                  fontWeight: 900,
                  textTransform: 'none',
                  letterSpacing: '0.1rem',
                  margin: 0,
                }}
              >
                Codesino
              </Typography>
            </div>
          </Box>

          {/* Desktop Navigation */}
          <Box 
            sx={{ 
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              gap: 2
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ 
                  my: 2, 
                  color: location.pathname === page.path ? 'red' : 'white',
                  display: 'block',
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

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  minWidth: '200px'
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{
                    backgroundColor: location.pathname === page.path ? 'rgba(255, 0, 0, 0.1)' : 'inherit',
                  }}
                >
                  <Typography 
                    sx={{ 
                      textAlign: 'left',
                      width: '100%',
                      color: location.pathname === page.path ? 'red' : 'inherit',
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
