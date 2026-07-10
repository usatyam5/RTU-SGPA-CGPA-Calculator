import React, { useState } from 'react';
import Switch from "@mui/material/Switch";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Link, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import './Navbar.css';

function Navbar({ toggleDark, setToggleDark }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleThemeChange = () => {
        setToggleDark(!toggleDark);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const linkStyles = {
        textDecoration: 'none',
        marginRight: theme.spacing(5),
        fontSize: "20px",
        fontWeight: '400',
        color: theme.palette.text.primary,
    };

    const menuItems = ['About', 'Services', 'Contact', 'Sign Up', 'Sign In'];

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'primary.main', backgroundImage: 'none', }}>
                <Toolbar>
                    <Typography fontSize="25px" fontWeight="400" sx={{ fontFamily: 'inherit', flexGrow:"1"  }}>
                        RTU SGPA/CGPA Calulator
                    </Typography>

                            <IconButton onClick={handleThemeChange} color="inherit" >
                                {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>

                
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
