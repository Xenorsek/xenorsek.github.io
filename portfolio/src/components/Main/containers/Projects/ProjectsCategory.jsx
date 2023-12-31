import { CardHeader, Collapse, IconButton } from "@mui/material"
import ProjectCard from "./ProjectCard"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const ProjectsCategory = ({projects, categoryName, isExpanded}) =>{
    const [expanded, setExpanded] = useState(isExpanded ? isExpanded : false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <>
            <CardHeader
                title={categoryName}
                titleTypographyProps={{variant:"h6"}}
                action={
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        {expanded ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                }
            />
            <Collapse className="projectsCardContainer" in={expanded} timeout="auto" unmountOnExit>
                {
                    projects.map((project, index) =>(
                        <ProjectCard 
                            key={index}
                            header = {project.header}
                            description={project.description}
                            demoLink={project.demoLink}
                            repositoryName={project.repositoryName}
                            repositoryUsername={project.repositoryUsername}
                            images={project.images}
                            imageWidth={project.imageWidth}
                            imageHeight={project.imageHeight}
                            alignItems={index % 2 === 0 ? "right" : "left"}
                        />        
                    ))
                }
            </Collapse>
        </>
    )
}
export default ProjectsCategory