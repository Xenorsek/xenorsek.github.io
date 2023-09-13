import { Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Link, Tooltip, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "../../../custom/AutoPlaySwipeableViews ";
import { useEffect, useRef, useState } from "react";
import { GitHub, Web } from '@mui/icons-material';
const ProjectCard = ({header, description, demoLink, repositoryName, repositoryUsername = "xenorsek", images, alignItems}) => {
    const carouselClass = "projectCardCarousel " + alignItems;
    const cardHeaderClass = "projectCardHeader " + alignItems;
    const collapseClass = "collapseCard " + alignItems;
    const repositoryStats = repositoryName ? `https://github-readme-stats.vercel.app/api/pin/?username=${repositoryUsername}&repo=${repositoryName}&theme=dark` : null;
    const repositoryLink = repositoryName ? `https://github.com/${repositoryUsername}/${repositoryName}` : null;
    const isCollapse = repositoryName != null;
    const isCardActions = demoLink || isCollapse;
    const projectCardRef = useRef(null);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      let projectCardRefCurrent = projectCardRef.current;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setScroll(true); // Element ".Card" jest widoczny na ekranie
            observer.disconnect(); // Przestań obserwować po znalezieniu elementu
          }
        });
      });
  
      if (projectCardRefCurrent) {
        observer.observe(projectCardRefCurrent);
      }
  
      return () => {
        if (projectCardRefCurrent) {
          observer.unobserve(projectCardRefCurrent); // przerwanie obserwacji gdy komponent jest odmontowywany
        }
      };
    }, []);

    return (
      <Card ref={projectCardRef} className={scroll ? "projectCard " + alignItems : "projectCard"}>
        { header && <CardHeader titleTypographyProps={{variant:"h6"}} className={cardHeaderClass} title={header}/> }
        <CardContent className="projectCardContent">
            {images && <SwipeableTextMobileStepper className={carouselClass} images={images} showControls={false} showTitle={false} /> }
            { description && <Typography className="projectCardDescription">{description}</Typography> }
        </CardContent>
        {isCardActions && <CardActions disableSpacing>
          {isCollapse && 
          <Tooltip title="Github">
                <IconButton
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
          }
          { demoLink && 
          <Tooltip title="Demo">
            <Link href={demoLink} target="_blank"><IconButton><Web /></IconButton></Link> 
          </Tooltip>
          }
        </CardActions>}
        
        <Collapse className={collapseClass} in={expanded} timeout="auto" unmountOnExit>
              { repositoryStats && 
                <Link href={repositoryLink} target="_blank">
                  <img src={repositoryStats} alt="github readme stats" /> 
                </Link> 
              }            
        </Collapse>
    </Card>
      )}
export default ProjectCard;