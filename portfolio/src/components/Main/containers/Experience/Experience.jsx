import { Card, CardContent, CardHeader, Typography } from "@mui/material";

function Experience(){
    return (
        <Card className="experience">
            <CardHeader title="Moje Doświadczenie"/>            
            <CardContent>
                <Typography> 
                W mojej karierze miałem przyjemność pracować nad różnorodnymi projektami. Niezależnie od skali projektu, zawsze staram się dostarczyć rozwiązania, które przynoszą wartość i zadowolenie klientom. Kilka z moich projektów można zobaczyć w sekcji portfolio.
                </Typography> 
            </CardContent>
        </Card>
    )
}

export default Experience;