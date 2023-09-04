import { Card, CardContent, CardHeader, Typography } from "@mui/material";

function About(){
    return (
        <div className="About">
            <Card>
            <CardContent>
                <Typography> 
                    Witaj! Nazywam się Marcin Kozłowski, i jestem pasjonatem tworzenia aplikacji i rozwiązań opartych na technologii .NET. Moja przygoda z programowaniem rozpoczęła się wiele lat temu, i od tego czasu nieustannie doskonalę swoje umiejętności, aby dostarczać innowacyjne i efektywne rozwiązania dla klientów i użytkowników.
                </Typography>
            </CardContent>
            <CardHeader title="Moja historia"/>            
            <CardContent>
                <Typography> 
                    Moja fascynacja programowaniem zaczęła się, gdy po raz pierwszy zetknąłem się z C#. Ta wszechstronna i potężna technologia zapoczątkowała moją przygodę z .NET, a od tego czasu nie patrzyłem już wstecz. Pracując w różnych projektach, od małych startupów po duże przedsiębiorstwa, zdobyłem cenne doświadczenie w projektowaniu, rozwijaniu i utrzymaniu aplikacji na platformie .NET.
                </Typography> 
            </CardContent>
            </Card>
        </div>
    )
}

export default About;