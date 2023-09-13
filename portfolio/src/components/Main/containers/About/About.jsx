import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import img from "../../../../assets/images/omnie.jpg";
import {AboutContent, PassionContent} from "../../../../assets/content/content";
function About(){
    return (
        <Card className="aboutCard gradient-card">
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
        </Card>
    )
}

export default About;