import { Card, CardContent, CardHeader, Link, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer(){
    return(
        <Card className="footer">
            <CardHeader title="Kontakt"/>   
            <CardContent>
                Jeśli jesteś zainteresowany współpracą lub masz pytania, śmiało się ze mną skontaktuj. Jesteś serdecznie zaproszony do odwiedzenia mojego portfolio, gdzie znajdziesz więcej informacji o mojej pracy i projektach.
            <Typography><Link href="" ><LinkedInIcon/></Link></Typography>
            </CardContent>
        </Card>
    )
}
export default Footer;