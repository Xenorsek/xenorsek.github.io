import { Gamepad, Language } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Course from "./course";
function Experience(){
    return (
        <Card className="experience">
            <CardHeader title="Moje Doświadczenie"/>            
                <CardContent>
                    <Typography variant="h6">
                        Podjęte kursy:
                    </Typography> 
                    <div className="courses">
                        <Course progress={50}
                            color="success"
                            title="Learn Unity in C# & Code your First Five 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap. GameDev.tv"
                            icon={<Gamepad color="success"/>}
                        />
                        <Course progress={90}
                            color="secondary"
                            title="Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#). Jakub Kozera"
                            icon={<Language color="secondary"/>}
                        />
                        <Course progress={100}
                            color="primary"
                            title="React - The Complete Guide 2023 (incl. React Router & Redux). Academind by Maximilian Schwarzmüller"
                            icon={<Language color="primary"/>}
                        />
                    </div>
                </CardContent>
        </Card>
    )
}

export default Experience;