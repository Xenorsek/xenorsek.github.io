import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "../../../custom/AutoPlaySwipeableViews ";
const ProjectCard = () => {
    const header = "Delivery Driver";
    const description = "Moja fascynacja programowaniem zaczęła się, gdy po raz pierwszy zetknąłem się z C#. Ta wszechstronna i potężna technologia zapoczątkowała moją przygodę z .NET, a od tego czasu nie patrzyłem już wstecz. Pracując w różnych projektach, od małych startupów po duże przedsiębiorstwa, zdobyłem cenne doświadczenie w projektowaniu, rozwijaniu i utrzymaniu aplikacji na platformie .NET.";
    const images = [
        {
          label: 'San Francisco – Oakland Bay Bridge, United States',
          imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          label: 'Bird',
          imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
          label: 'Bali, Indonesia',
          imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        },
        {
          label: 'Goč, Serbia',
          imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
      ];

    return (<Card className="projectCard">
        <CardHeader title={header}/>
        <CardContent className="projectCardContent">
            <SwipeableTextMobileStepper className="projectCardCarousel" images={images} showControls={false} showTitle={false} />
            <Typography>{description}</Typography>            
        </CardContent>
         
    </Card>)
}
export default ProjectCard;