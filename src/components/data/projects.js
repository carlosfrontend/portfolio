import todoListImage from "../../images/todoList.webp";
import memoryCardImage from "../../images/memoryCard.webp";
import battleshipImage from "../../images/battleship.webp";

const projects = () => [
  {
    title: "TodoList App  ",
    description:
      "Una aplicación de lista de tareas que almacena los datos con localStorage. Permite crear y borrar proyectos, incluir tareas dentro de cada uno, mostrar las tareas que existen dentro de ellos y editar cada una de ellas. Organiza las tareas por bandejas para poder ordenarlas por proximidad en el tiempo, Inbox, Today, Tomorrow, Next. Para manejar las fechas he utilizado la librería externa 'date-fns' como dependencia del proyecto.",
    image: todoListImage,
    loading: "eager",
    codeLink: "https://github.com/carlosfrontend/todo-list/",
    liveLink: "https://carlosfrontend.github.io/todo-list/",
    tags: [
      { name: "HTML5", className: "devicon-html5-plain colored" },
      { name: "CSS3", className: "devicon-css3-plain colored" },
      {
        name: "Javascript",
        className: "devicon-javascript-plain colored",
      },
      { name: "Webpack", className: "devicon-webpack-plain colored" },
    ],
  },
  {
    title: "Memory Game",
    description:
      "Juego de memoria en el que no puedes elegir la misma pareja de cartas dos veces, ¿ Te atreves ?. Obtiene las imágenes de una API externa. Cada vez que se hace click en una de las tarjetas estas son barajadas y colocadas aleatoriamente. Mantiene la puntuación actual y la mejor puntuación. Uso de ganchos useEffect y useState de ReactJS.",
    image: memoryCardImage,
    loading: "lazy",
    codeLink: "https://github.com/carlosfrontend/memory-card/",
    liveLink: "https://memory-card-roan.vercel.app/",
    tags: [
      { name: "HTML5", className: "devicon-html5-plain colored" },
      { name: "CSS3", className: "devicon-css3-plain colored" },
      {
        name: "Javascript",
        className: "devicon-javascript-plain colored",
      },
      { name: "ReactJS", className: "devicon-react-original colored" },
      { name: "Vite", className: "devicon-vitejs-plain colored" },
    ],
  },
  {
    title: "Battleship, (Versión de Escritorio)",
    description: "El clásico juego de hundir la flota.",
    image: battleshipImage,
    loading: "lazy",
    codeLink: "https://github.com/carlosfrontend/battleship-game",
    liveLink: "https://carlosfrontend.github.io/battleship-game/",
    tags: [
      { name: "HTML5", className: "devicon-html5-plain colored" },
      { name: "CSS3", className: "devicon-css3-plain colored" },
      {
        name: "Javascript",
        className: "devicon-javascript-plain colored",
      },
      { name: "Jest", className: "devicon-jest-plain colored" },
      { name: "Webpack", className: "devicon-webpack-plain colored" },
    ],
  },
  {
    title: "Home Page",
    description: "Una página de inicio responsiva.",
    codeLink: "https://github.com/carlosfrontend/odin-homepage/",
    liveLink: "https://carlosfrontend.github.io/odin-homepage/",
    imageUrl: "https://placehold.co/300X200",
    loading: "eager",
    tags: [
      { name: "HTML5", className: "devicon-html5-plain colored" },
      { name: "CSS3", className: "devicon-css3-plain colored" },
      {
        name: "Javascript",
        className: "devicon-javascript-plain colored",
      },
    ],
  },
];

export { projects };
