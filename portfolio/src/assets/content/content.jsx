import ReactIcon from "../../components/custom/ReactIcon";
import musicConverter from "../images/musicConverter.png";
import musicConverter1 from "../images/musicConverter1.png";
import musicConverter2 from "../images/musicConverter2.png";
import usersnotebook1 from "../images/usersnotebook1.png";
import usersnotebook2 from "../images/usersnotebook2.png";
import usersnotebook3 from "../images/usersnotebook3.png";
import quizUnit1 from "../images/quizUnit1.png";
import quizUnit2 from "../images/quizUnit2.png";
import quizUnit3 from "../images/quizUnit3.png";
import Snowboarder1 from "../images/Snowboarder1.png";
import Snowboarder2 from "../images/Snowboarder2.png";
import Snowboarder3 from "../images/Snowboarder3.png";
import tilevania1 from "../images/tilevania1.png";
import tilevania2 from "../images/tilevania2.png";
import tilevania3 from "../images/tilevania3.png";

export const AboutContent = "Witaj! Nazywam się Marcin Kozłowski. Jestem absolwentem studiów informatycznych. Już w technikum informatycznym rozwijałem swoje umiejętności programowania. Polubiłem szczególnie dwie technologie, którymi są .NET i React. Od 2020 roku zajmuję się projektowaniem i tworzeniem oprogramowania zawodowo.";

export const PassionContent = "Jestem osobą, która od dłuższego czasu zgłębia tajniki programowania, a moją pasją stało się tworzenie oprogramowania w technologiach .NET i React. Od 2020 roku mam przyjemność pracować zawodowo w tych dziedzinach, co pozwoliło mi rozwinąć umiejętności i zdobyć cenne doświadczenie.";

export const reactProjects = [
    {
        header: "Music converter",
        description: "Aplikacja wykorzystująca AI do konwertowania plików audio na typ danych musicSequence. Aplikacja pozwala na wczytanie pliku audio lub wyprowadzonego z mikrofonu. W aplikacji znajdziemy bibliotekę, w której istnieją przykładowe pliki muzyczne. Po utworzeniu konta możemy dodawać i polubić utwory.",
        demoLink:"https://music-converter-6012d.firebaseapp.com/",
        repositoryUsername: "xenorsek",
        repositoryName: "PracowniaDyplomowa",
        images: [
            {
              label: 'Strona główna',
              imgPath: musicConverter
            },
            {
              label: 'Biblioteka',
              imgPath:musicConverter1,
            },
            {
              label: 'MusicSequence',
              imgPath:musicConverter2
            },
          ],
          imageWidth:'400px',
          imageHeight:'200px',
    }
];

export const netProjects = [
  {
    header: "UsersNotebook",
    description: "Aplikacja UsersNotebook umożliwia zarządzanie użytkownikami: dodawanie, edycję, usuwanie oraz generowanie raportów w PDF. Zbudowana w ASP.NET Core 7 z wykorzystaniem MVC, Entity Framework oraz Docker.",
    repositoryUserName: "xenorsek",
    repositoryName: "UsersNotebook",
    images: [
      {
        label: 'Strona główna',
        imgPath: usersnotebook1
      },
      {
        label: 'Dodaj użytkownika',
        imgPath:usersnotebook2,
      },
      {
        label: 'Raport',
        imgPath:usersnotebook3
      },
    ],
    imageWidth:'400px',
    imageHeight:'200px',
  }
]

export const professionalProjects = [
    {
        header: "Developer Capacity Management Tool",
        description: "DCMT jest systemem do głównego zarządzania kompetencjami i projektami w firmie. Aplikacja wykorzystuje .NET 6.0 + React wykorzystując Azure portal i synchronizowała się z AD. Praca była w metodologii Scrum. Właściciele projektów mogli przypisywać osoby do konkretnych stanowisk i ról w projekcie. Generowane były kody projektowe, które umożliwiały następnie rejestrowanie godzin dla pracownika. Użytkownicy otrzymywali powiadomienia o zmianach statusów ich przypisania bądź o projektach, w których się znajdowali.",
    },
    {
        header: "Interview Scheduler",
        description: "Interview Scheduler jest aplikacją webową w technologiach .NET 6.0 + Angular z serwisami Azure Portal. Praca była w metodologii Scrum. Celem aplikacji była automatyzacja procesu rekrutacji w firmie. Aplikacja umożliwiała monitorowanie procesu rekrutacji i procesu walidacji przyszłych pracowników po przez tworzenie i przypisywanie spotkania technicznego do wykwalifikowanego pracownika z firmy.",
    },    
    {
      header: "CRM",
      description: "CRM jest aplikacją łączącą kilka różnych źródłeł danych pozwalając na szybki dostęp w uporządkowanym miejscu. CRM wykorzystuje .NET 5.0 MVC z bazą Oracle. Dodatkowo wykorzystywany był DevExpress. Aplikacja umożliwiała dostęp do informacji podatników z wyszczególnieniem źrodeł danych. Pozwalała na zaawansowane filtrowanie danych, wyświetlała informację ze wskaźników biznesowych oraz umożliwiała generować raporty.",
  }
];

export const UnityProjects = [
  {
    header:"QuizUnit",
    description:"QuizUnit - jest to gra utworzona w Unity, której przebieg gry oparty jest o Quiz. Pytania zostały dobrane tak by przypominały o podstawie tworzenia gier w Unity. Quiz składał się z 3 scen: Start - Gra - Ekran końcowy. Podczas gry użytkownik musiał odpowiedzieć na pytanie z limitem czasu. Pytania są generowane losowo co utrudnia, użytkownikowi strzelanie. Po odpowiedzeniu na wszystkie pytania, użytkownik witał się z ekranem końcowym, na którym pokazany był jego wynik, oraz przycisk umożliwiający przejście gry ponownie.",
    repositoryUsername:"Xenorsek",
    repositoryName:"QuizUnit",
    images: [
      {
        label: 'Ekran start',
        imgPath: quizUnit1
      },
      {
        label: 'Ekran gra',
        imgPath:quizUnit2,
      },
      {
        label: 'Ekran koniec',
        imgPath:quizUnit3
      },
    ],
  },
  {
    header:"Snowboarder",
    description:"Snowboarder jest grą, w której użytkownik wciela się w snowboardzistę, który zjeżdża po stoku tak by dotrzeć do mety. Musi uważać na przeszkody oraz na swoją głowę, która jest jego punktem krytycznym. Gracz może przekręcać postać i przyśpieszać podczas jazdy po śniegu tak aby uniknąć przeszkody i ukończyć stok w jak najlepszym stanie oraz o dobrym czasie.",
    repositoryUsername:"Xenorsek",
    repositoryName:"Snowboarder",
    images: [
      {
        label: 'Snowboarder',
        imgPath: Snowboarder1
      },
      {
        label: 'Snowboarder',
        imgPath:Snowboarder2,
      },
      {
        label: 'Snowboarder',
        imgPath:Snowboarder3
      },
    ],
  },
  {
    header:"TileVania",
    description:"Tilevania jest platformówką gdzie użytkownik musi uważać na wrogów, kwas i kolce. Skacz wysoko i dotrzyj do wyjścia. Przed tobą stoją 3 etapy. Powodzenia!",
    repositoryUsername:"Xenorsek",
    repositoryName:"Snowboarder",
    images: [
      {
        label: 'Tilevania',
        imgPath: tilevania1
      },
      {
        label: 'Tilevania',
        imgPath:tilevania2,
      },
      {
        label: 'Tilevania',
        imgPath:tilevania3
      },
    ],
  }
];

export const skillsArray = [ {label:"React" , icon: <ReactIcon />}, {label:"Azure portal"}, {label:"ASP .NET Core"}, {label:"Entity FrameworkCore"}, {label:"REST"}, {label:"Linq"}, {label:"Hangfire"}, {label:"Automapper"}, {label:"Dapper"}, {label:"SOLID"}, {label:"Unit tests"}, {label:"GIT"}, {label: "Redux"}, {label:"Material UI"}, {label:"npm"}, {label:"NuGet"}, {label:"MVC"}, {label:"MySQL"}, {label:"Jira"}, {label:"Scrum"}, {label:"Agile"}];