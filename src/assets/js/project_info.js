import remoteIsland from "../../assets/thumbnails/remote-island.png";
import memoryMaker from "../../assets/thumbnails/memory-maker.png";
import passwdGen from "../../assets/thumbnails/passwd-generator.png";
import weatherDash from "../../assets/thumbnails/weather-dashboard.png";
import noteTaker from "../../assets/thumbnails/note-taker.png";
import employeeDir from "../../assets/thumbnails/employee-directory.png";
import bookunity from "../../assets/thumbnails/bookunity.png";

const projectInfo = [
  {
    title: "Bookunity",
    description:
      'Full-stack MERN application that uses Google Books API and hashed verification to create a community network where users can "rent" books from one another.',
    repo: "https://github.com/JaredP17/final-project",
    url: "https://desolate-caverns-47449.herokuapp.com/",
    image: bookunity,
  },
  {
    title: "Memory Maker",
    description:
      "Memory Maker is a full-stack web application created with the MVC paradigm. Memory Maker uses node.js with an express.js server, a mySQL database, a sequelize ORM, and handlebars.js as a view engine. The app features an interactive UI and responsive design.",
    repo: "https://github.com/JaredP17/Memory-Maker",
    url: "https://memory-maker.herokuapp.com/",
    image: memoryMaker,
  },
  {
    title: "Remote Island",
    description:
      "This project was created to provide a solution to everyone's want to escape (from reality)! We created a website where the user can decide what type of vacation they want to take and be transported to a page with videos (some live) of their desired getaway.",
    repo: "https://github.com/JaredP17/gt-project-1",
    url: "https://jaredp17.github.io/gt-project-1/",
    image: remoteIsland,
  },
  {
    title: "Employee Directory",
    description:
      "For this assignment, I had to create an employee directory with React. This assignment required me to break up the application's UI into components, manage component state, and respond to user events. Employee data was generated with the randomuser.me API.",
    repo: "https://github.com/JaredP17/employee-directory",
    url: "https://jaredp17.github.io/employee-directory/",
    image: employeeDir,
  },
  {
    title: "Password Generator",
    description:
      "An application that generates a random password based on user selected criteria. This app features dynamically updated HTML/CSS powered by JavaScript and includes a clean and polished UI and is responsive.",
    repo: "https://github.com/JaredP17/PasswordGenerator",
    url: "https://jaredp17.github.io/PasswordGenerator/",
    image: passwdGen,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that features dynamically updated HTML and CSS and uses the OpenWeather API to retrieve weather data for cities. Type in a city and see the current and 5-Day forecasts. City searches are persistent.",
    repo: "https://github.com/JaredP17/gt-hw6-weather-dashboard",
    url: "https://jaredp17.github.io/gt-hw6-weather-dashboard/",
    image: weatherDash,
  },
];

export default projectInfo;
