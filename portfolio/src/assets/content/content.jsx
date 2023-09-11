import musicConverter from "../images/musicConverter.png";
import musicConverter1 from "../images/musicConverter1.png";
import musicConverter2 from "../images/musicConverter2.png";

export const AboutContent = "Witaj! Nazywam się Marcin Kozłowski. Jestem absolwentem studiów informatycznych. Już w technikum informatycznym rozwijałem swoje umiejętności programowania. Polubiłem szczególnie dwie technologie, którymi są .NET i React. Od 2021 roku zajmuję się projektowaniem i tworzeniem oprogramowania zawodowo.";

export const PassionContent = "Jestem osobą, która od dłuższego czasu zgłębia tajniki programowania, a moją pasją stało się tworzenie oprogramowania w technologiach .NET i React. Od 2021 roku mam przyjemność pracować zawodowo w tych dziedzinach, co pozwoliło mi rozwinąć umiejętności i zdobyć cenne doświadczenie.";

export const reactProjects = [
    {
        header: "Music converter",
        description: "Aplikacja wykorzystująca AI do konwertowania plików audio na typ danych musicSequence. Aplikacja pozwala na wczytanie pliku audio lub wyprowadzonego z mikrofonu. W aplikacji znajdziemy bibliotekę, w której istnieją przykładowe pliki muzyczne. Po utworzeniu konta możemy dodawać i polubić utwory.",
        link:"https://music-converter-6012d.firebaseapp.com/",
        repositoryUsername: "xenorsek",
        repositoryName: "PracowniaDyplomowa",
        images: [
            {
              label: 'San Francisco – Oakland Bay Bridge, United States',
              imgPath: musicConverter
            },
            {
              label: 'Bird',
              imgPath:musicConverter1,
            },
            {
              label: 'Bali, Indonesia',
              imgPath:musicConverter2
            },
          ],
    }
];

export const proffesionalProjects = [
    {
        header: "Developer Capacity Management Tool",
        description: "DCMT jest systemem do głównego zarządzania kompetencjami i projektami w firmie.",
    },
    {
        header: "Interview Scheduler",
        description: "Interview Scheduler jest aplikacją webową w technologiach .NET Angular z serwisami Azure Portal. Aplikacja wspomagała proces rekrutacyjny w firmie. Pozwalała monitorować proces rekrutacji i tworzyć spotkania techniczne.",
    }

];