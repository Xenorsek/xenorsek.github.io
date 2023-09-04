import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { scroller } from 'react-scroll';
const Header = ({fetchMoreData, componentsNames}) => {
    const scrollToSection = (section) => {
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
            },400)
            
        }
      };

return (
    <Box>
        <AppBar position="static" className='header'>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Xenorsek!
            </Typography>
            <div className="navigation">
                <Button variant="text" onClick={()=>{scrollToSection(0)}}>O mnie</Button>                
                <Button variant="text"  onClick={()=>{scrollToSection(1)}}>Umiejętności</Button>
                <Button variant="text" onClick={()=>{scrollToSection(2)}}>Projekty</Button>
                <Button variant="text" onClick={()=>{scrollToSection(3)}}>Doświadczenie</Button>
                <Button variant="text" onClick={()=>{scrollToSection(4)}}>Kontakt</Button>
            </div>
            </Toolbar>
        </AppBar>
    </Box>
)
}
export default Header;