import { CardActions, CardContent, CardHeader, CardMedia, IconButton, Link, Typography } from "@mui/material";
import img from "../../../../assets/images/omnie.jpg";
import {AboutContent, PassionContent} from "../../../../assets/content/content";
import { LinkedIn, Mail } from "@mui/icons-material";
import HoverCard from "../../../custom/HoverCard";
function About(){
    return (
        <HoverCard className="aboutCard gradient-card star-animation-container">
            <CardContent>
                <CardMedia className="aboutImage" component="img" image={img} alt="about me" />
                <Typography className="aboutTypo">
                    {AboutContent}
                </Typography>
            </CardContent>
            <CardHeader title="Pasja w Kodowaniu"/>            
            <CardContent>
                <Typography> 
                    {PassionContent}
                </Typography> 
            </CardContent>
            <CardActions disableSpacing>
                <Link href="https://www.linkedin.com/in/marcin-koz%C5%82owski-86312221b/" target="_blank" ><IconButton><LinkedIn/></IconButton></Link>
                <Link href="mailto:marcin.koz52@gmail.com" target="_blank" ><IconButton ><Mail/></IconButton></Link>
            </CardActions>
        </HoverCard>
    )
}

export default About;