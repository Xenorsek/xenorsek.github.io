import { Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import ProjectsCategory from "./ProjectsCategory";
import { reactProjects } from "../../../../assets/content/content";
function Projects(){

    return (
        <Card className="about">
            <CardHeader title="Moje projekty"/>            
            <CardContent>
                <Typography> 
                W mojej karierze miałem przyjemność pracować nad różnorodnymi projektami. Niezależnie od skali projektu, zawsze staram się dostarczyć rozwiązania, które przynoszą wartość i zadowolenie klientom. Kilka z moich projektów można zobaczyć w sekcji portfolio.
                </Typography> 
                <Divider sx={{marginTop:"20px", marginBottom:"20px"}}/>
                <ProjectsCategory  categoryName="React" projects={reactProjects} isExpanded />
            </CardContent>
        </Card>
    )
}

export default Projects;