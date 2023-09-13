import { Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import ProjectsCategory from "./ProjectsCategory";
import { reactProjects, proffesionalProjects } from "../../../../assets/content/content";
function Projects(){

    return (
        <Card className="projects gradient-card">
            <CardHeader title="Projekty"/> 
            <CardContent>
                <Typography> 
                    W mojej karierze miałem przyjemność pracować nad różnorodnymi projektami. Niezależnie od skali projektu, zawsze staram się dostarczyć rozwiązania, które przynoszą wartość i zadowolenie klientom. Kilka z moich projektów można zobaczyć w sekcji portfolio.
                </Typography> 
                <ProjectsCategory categoryName="Projekty zawodowe" projects={proffesionalProjects} isExpanded />
                
                <Divider sx={{marginTop:"20px", marginBottom:"20px"}}/>
                <ProjectsCategory  categoryName="Projekty prywatne" projects={reactProjects} isExpanded />
            </CardContent>
        </Card>
    )
}

export default Projects;