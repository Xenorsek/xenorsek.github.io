import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

function Projects(){
    return (
        <div className="About">
            <Card>
            <CardHeader title="Moje projekty"/>            
            <CardContent>
                <Typography> 
                W mojej karierze miałem przyjemność pracować nad różnorodnymi projektami. Niezależnie od skali projektu, zawsze staram się dostarczyć rozwiązania, które przynoszą wartość i zadowolenie klientom. Kilka z moich projektów można zobaczyć w sekcji portfolio.
                </Typography> 
            </CardContent>
            </Card>

            <ProjectCard />
        </div>
    )
}

export default Projects;