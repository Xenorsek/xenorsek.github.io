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
    <div className="header">
        <div className="logo">
            Xenorsek!
        </div>
        <div className="navigation">
            <Button variant="text" >O mnie</Button>
            <Button variant="text" >Doświadczenie</Button>
            <Button variant="text" >Umiejętności</Button>
            <Button variant="text">Projekty</Button>
            <Button variant="text" onClick={()=>{scrollToSection(1)}}>Kontakt</Button>
        </div>
    </div>
)
}
export default Header;