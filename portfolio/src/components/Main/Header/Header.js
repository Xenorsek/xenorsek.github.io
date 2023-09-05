import { AppBar, Box, IconButton, Toolbar, Typography, MenuItem, Menu, Button } from '@mui/material';
import { scroller } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
const Header = ({fetchMoreData, componentsNames}) => {
    const scrollToSection = (section) => {
        setAnchorEl(null);
        if(componentsNames[section].visible){
            scroller.scrollTo(componentsNames[section].name, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
        else{
            fetchMoreData(section);
            setTimeout(() => {
                scroller.scrollTo(componentsNames[section].name, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                });
            }, 500)
            
        }
      };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

return (
    <Box>
        <AppBar position="static" className='header'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Xenorsek!
                </Typography>
                <div className='iconNavigation'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={()=>{scrollToSection(0)}}>O mnie</MenuItem>                
                    <MenuItem onClick={()=>{scrollToSection(1)}}>Umiejętności</MenuItem>
                    <MenuItem onClick={()=>{scrollToSection(2)}}>Projekty</MenuItem>
                    <MenuItem onClick={()=>{scrollToSection(3)}}>Doświadczenie</MenuItem>
                    <MenuItem onClick={()=>{scrollToSection(4)}}>Kontakt</MenuItem>
                </Menu>
                <div className="navigation">
                    <Button color="secondary" variant="text" onClick={()=>{scrollToSection(0)}}>O mnie</Button>                
                    <Button color="secondary" variant="text" onClick={()=>{scrollToSection(1)}}>Umiejętności</Button>
                    <Button color="secondary" variant="text" onClick={()=>{scrollToSection(2)}}>Projekty</Button>
                    <Button color="secondary" variant="text" onClick={()=>{scrollToSection(3)}}>Doświadczenie</Button>
                    <Button color="secondary" variant="text" onClick={()=>{scrollToSection(4)}}>Kontakt</Button>
                </div>
            </Toolbar>
        </AppBar>
    </Box>
)
}
export default Header;