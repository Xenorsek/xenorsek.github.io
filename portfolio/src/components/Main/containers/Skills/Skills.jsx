import { Card, CardContent, CardHeader, Typography } from "@mui/material";

function Skills(){
    return (
        <div className="About">
            <Card>
            <CardHeader title="Moje umiejętności"/>            
            <CardContent>
                <Typography component={'span'} variant={'body2'}> 
                Moje umiejętności obejmują:
                <ul>
                    <li>Rozwijanie aplikacji webowych i desktopowych w C#.</li>
                    <li>Korzystanie z platformy ASP.NET do tworzenia wydajnych i skalowalnych serwisów internetowych.</li>
                    <li>Biegłość w korzystaniu z bazy danych SQL oraz Entity Framework do zarządzania danymi.</li>
                    <li>Praca z narzędziami takimi jak Visual Studio i Visual Studio Code.</li>
                    <li>Testowanie i debugowanie aplikacji w celu zapewnienia jakości kodu.</li>
                    <li>Tworzenie responsywnych interfejsów użytkownika przy użyciu technologii frontendowych, takich jak React.</li>
                </ul>
                </Typography> 
            </CardContent>
            </Card>
        </div>
    )
}

export default Skills;