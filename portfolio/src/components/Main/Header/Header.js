import { AppBar, IconButton, Toolbar, Typography, MenuItem, Menu, Button, Switch, useMediaQuery } from '@mui/material';
import { scroller } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import { ColorModeContext } from '../../../App';
const Header = ({fetchMoreData, componentsNames}) => {
    const [darkMode, setDarkMode] = useState(false);
    const colorMode = React.useContext(ColorModeContext);
    const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    
    useEffect(()=>{
        const darkModeFromStorage = JSON.parse(localStorage.getItem("darkmode"));
        
        if(darkModeFromStorage == null){
            setDarkMode(preferDarkMode)
        }
        else{
            setDarkMode(darkModeFromStorage);
        }
    },[preferDarkMode])

    const scrollToSection = (section) => {
        setAnchorElNavigation(null);
        if(componentsNames[section].visible){
            scrollToElement(componentsNames[section].name)
        }
        else{
            fetchMoreData(section);
            setTimeout(() => {
                scrollToElement(componentsNames[section].name)
            }, 100)
        }
      };

    const scrollToElement = (sectionName) =>{
        const offset = 80;
        scroller.scrollTo(sectionName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -offset
        });
    }

    const [anchorElNavigation, setAnchorElNavigation] = React.useState(null);
    const [anchorElPageSettings, setAnchorElPageSettings] = React.useState(null);
    const openPageSettings = Boolean(anchorElPageSettings);
    const openPageNavigation = Boolean(anchorElNavigation);

    const handleOpenNavigation = (event) => {
        setAnchorElNavigation(event.currentTarget);
    };

    const handleCloseNavigation = () => {
        setAnchorElNavigation(null);
    };

    const handleOpenPageSettings = (event) =>{
        setAnchorElPageSettings(event.currentTarget);
    }

    const handleClosePageSettings = () => {
        setAnchorElPageSettings(null);
    };

    const handleChangeDarkMode = () => {
        setDarkMode((prev) => {
            localStorage.setItem("darkmode", !prev);
            return !prev;
        });
        colorMode.toggleColorMode();

    }

return (
    <AppBar position="sticky" className='header'>
        <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, letterSpacing:3, fontWeight:600 }}>
                Marcin Kozłowski
            </Typography>
            <div className='iconNavigation'>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    aria-controls={openPageNavigation ? 'navigation-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPageNavigation ? 'true' : undefined}
                    onClick={handleOpenNavigation}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="navigation">
                <Button color="inherit" variant="text" onClick={()=>{scrollToSection(0)}}>O mnie</Button>
                <Button color="inherit" variant="text" onClick={()=>{scrollToSection(1)}}>Doświadczenie</Button>
                <Button color="inherit" variant="text" onClick={()=>{scrollToSection(2)}}>Projekty</Button>
                <IconButton 
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    aria-controls={openPageSettings ? 'page-settings-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPageSettings ? 'true' : undefined}
                    onClick={handleOpenPageSettings}
                    sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
            </div>
        </Toolbar>
        <Menu
            id="navigation-menu"
            anchorEl={anchorElNavigation}
            open={openPageNavigation}
            onClose={handleCloseNavigation}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={()=>{scrollToSection(0)}}>O mnie</MenuItem>             
            <MenuItem onClick={()=>{scrollToSection(1)}}>Doświadczenie</MenuItem>
            <MenuItem onClick={()=>{scrollToSection(2)}}>Projekty</MenuItem>
        </Menu>
        <Menu
            id="page-settings-menu"
            anchorEl={anchorElPageSettings}
            open={openPageSettings}
            onClose={handleClosePageSettings}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleChangeDarkMode}>Dark mode <Switch checked={darkMode}/></MenuItem>                
        </Menu>
    </AppBar>
)
}
export default Header;