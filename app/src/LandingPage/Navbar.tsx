import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageSwitcher from './LanguageSwitcher.tsx';
import { useTranslation } from 'react-i18next';
import Diversity3Icon from '@mui/icons-material/Diversity3';
const pages = ['userNavbar.activities', 'userNavbar.discussions', 'userNavbar.handn','userNavbar.donate'];

const settings = ['Profile','About Us','Logout'];

function ResponsiveAppBar() {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [photo,setPhoto] = React.useState(null);
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        if(sessionStorage.getItem('googleImg')!==null){
          setPhoto(sessionStorage.getItem('googleImg'))
          return;
        }
        const respo = await fetch('http://3.22.180.190:3000/profile/photos'+"/"+sessionStorage.getItem("authToken")); // Adjust the API endpoint
        const respos = await respo.blob();
        console.log(respos)
     
        const reader = new FileReader();
          reader.onloadend = () => {
            setPhoto(reader.result)
          };
          if (respos) {
            reader.readAsDataURL(respos);
          }
        
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserData();
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    console.log(event)
    if(event==='userNavbar.activities'){
      window.location.href='/activities'
    }
    if(event==='userNavbar.donate'){
      window.location.href='/donations'
    }
    if(event==='userNavbar.discussions'){
      window.location.href='/discuss'
    }
    if(event==='userNavbar.activities'){
      window.location.href='/activities-camps'
    }
    if(event==='userNavbar.handn'){
      window.location.href='/news-health'
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    console.log(event)
    if(event==='Logout'){
        window.location.href='/';
    }
    if(event==='Profile'){
      window.location.href='/profile';
    }
    
    setAnchorElUser(null);
    
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Diversity3Icon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={()=>{window.location.href='/home'}}
          >
            YOUTHOPIA
            
          </Typography>
<LanguageSwitcher></LanguageSwitcher>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
           
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={()=>{window.location.href='/home'}}
          >
            YOUTHOPIA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t(page)}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={photo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>{
                    handleCloseUserMenu(setting)
                }}>
                  <Typography textAlign="center">{setting}</Typography>
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