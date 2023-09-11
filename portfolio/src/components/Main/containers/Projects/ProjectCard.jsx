import { Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Link, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "../../../custom/AutoPlaySwipeableViews ";
import { useEffect, useRef, useState } from "react";
import {ExpandLess, ExpandMore} from '@mui/icons-material';
const ProjectCard = ({header, description, link, repositoryName, repositoryUsername = "xenorsek", images, alignItems}) => {
    const carouselClass = "projectCardCarousel " + alignItems;
    const cardHeaderClass = "cardHeader " + alignItems;
    const collapseClass = "collapseCard " + alignItems;
    const repositoryStats = repositoryName ? `https://github-readme-stats.vercel.app/api/pin/?username=${repositoryUsername}&repo=${repositoryName}&theme=dark` : null;
    const repositoryLink = link ? link : `https://github.com/${repositoryUsername}/${repositoryName}`
    const isCollapse = repositoryName != null;

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
            { description && <Typography className="cardDescription">{description}</Typography> }
        </CardContent>

        {isCollapse && 
          <CardActions disableSpacing>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
        </CardActions>
        }
        
        <Collapse className={collapseClass} in={expanded} timeout="auto" unmountOnExit>
              { repositoryStats && 
                <Link href={repositoryLink}>
                  <img src={repositoryStats} alt="github readme stats" /> 
                </Link> 
              }

            
        </Collapse>
    </Card>
      )}
export default ProjectCard;