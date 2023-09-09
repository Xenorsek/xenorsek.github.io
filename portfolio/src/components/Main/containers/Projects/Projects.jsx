import { Card, CardContent, CardHeader, Collapse, Divider, IconButton, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import {ExpandLess, ExpandMore} from '@mui/icons-material';
import { useState } from "react";

function Projects(){
    const [expanded, setExpanded] = useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <Card className="about">
            <CardHeader title="Moje projekty"/>            
            <CardContent>
                <Typography> 
                W mojej karierze miałem przyjemność pracować nad różnorodnymi projektami. Niezależnie od skali projektu, zawsze staram się dostarczyć rozwiązania, które przynoszą wartość i zadowolenie klientom. Kilka z moich projektów można zobaczyć w sekcji portfolio.
                </Typography> 
                <Divider sx={{marginTop:"20px", marginBottom:"20px"}}/>
                <CardHeader 
                title="Unity Game Developing" 
                titleTypographyProps={{variant:"h6"}}
                action={
                    <IconButton
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        {expanded ? <ExpandLess /> : <ExpandMore />}
                        
                    </IconButton>
                }
                />

                
                <Collapse className="projectsCardContainer" in={expanded} timeout="auto" unmountOnExit>
                    <ProjectCard alignItems="right" />
                    <ProjectCard alignItems="left" />
                    <ProjectCard alignItems="right" />
                </Collapse>
            </CardContent>
        </Card>
    )
}

export default Projects;