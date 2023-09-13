import { Card, CardContent, CardHeader, Chip, Divider, Slide } from "@mui/material";
import { useRef } from "react";
import ReactIcon from "../../../custom/ReactIcon";
function Skills(){
const skillsArray = [ {label:"React" , icon: <ReactIcon />}, {label: "Redux"}, {label:"Material UI"}, {label:"ASP .NET Core"}, {label:"Entity Framework"}, {label:"REST"}, {label:"Linq"}, {label:"Hangfire"}, {label:"SOLID"}, {label:"Unit tests"}, {label:"GIT"}, {label:"npm"}, {label:"NuGet"}, {label:"MVC"}, {label:"MySQL"}];

    const containerRef = useRef(null);

    return (
        <Card className="skillsCard gradient-card">
            <CardHeader className="CardHeaderCenter" title="Umiejętności"/>            
            <Divider />
            <CardContent>
                <div className="skillsContainer" ref={containerRef}>
                    {skillsArray.map((skill, key) =>(
                        <Slide key={key} in={true} container={containerRef.current} timeout={1000}>
                            <Chip className="skill" label={skill.label} icon={skill.icon}  />
                        </Slide>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default Skills;