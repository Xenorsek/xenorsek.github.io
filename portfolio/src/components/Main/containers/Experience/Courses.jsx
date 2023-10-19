import { Gamepad, Language } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import Course from "./course";
import ReactIcon from "../../../custom/ReactIcon";
function Courses(){
    return (
        <Card className="coursesCard gradient-card">
            <CardHeader title="Kursy" className="CardHeaderCenter" />            
            <Divider />
                <CardContent>
                    <div className="courses">
                        <Course progress={100}
                            color="success"
                            title="Learn Unity in C# & Code your First Five 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap. GameDev.tv"
                            icon={<Gamepad color="success"/>}
                        />
                        <Course progress={100}
                            color="secondary"
                            title="Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#). Jakub Kozera"
                            icon={<Language color="secondary"/>}
                        />
                        <Course progress={100}
                            color="primary"
                            title="React - The Complete Guide 2023 (incl. React Router & Redux). Academind by Maximilian Schwarzmüller"
                            icon={<ReactIcon color="primary"/>}
                        />
                    </div>
                </CardContent>
        </Card>
    )
}

export default Courses;