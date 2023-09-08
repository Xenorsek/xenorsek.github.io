import { Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

function Projects(){
    return (
        <div className="about">
            <Card>
                <CardHeader title="Moje projekty"/>            
                <CardContent>
                    <Typography> 
                    W mojej karierze miałem przyjemność pracować nad różnorodnymi projektami. Niezależnie od skali projektu, zawsze staram się dostarczyć rozwiązania, które przynoszą wartość i zadowolenie klientom. Kilka z moich projektów można zobaczyć w sekcji portfolio.
                    </Typography> 
                    <Divider sx={{marginTop:"20px", marginBottom:"20px"}}/>
                    <Typography variant="h5"> 
                    Unity Game Developing
                    </Typography> 
                    <div className="projectsCardContainer">
                        <ProjectCard alignItems="right" />
                        <ProjectCard alignItems="left" />
                        <ProjectCard alignItems="right" />
                    </div>
                </CardContent>
            </Card>

            
        </div>
    )
}

export default Projects;