import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
      translation: {
        "jobTitle": "Computer Engineer & Software Developer",
        "summary": `I'm a 21 years old Computer engineer, I graduated from Rafael Urdaneta University in May of 2019.\n\nI specialize in Web development from Static web sites to	Progressive Web Apps, utilizing latest popular tools like React and NodeJS, and I love seeing a project start and grow into a deployed product that people can enjoy.\n\nI've also developed multiple mobile applications targeted to Android devices, that were compatible with any modern or outdated devices thanks to my focus on responsive design, accesibility and perfomance\n`,
        "skills": "Skills",
        "aboutMe":"About me",
        "contactMe":"Contact Me",
        "workProjects": "Work Projects",
        "courseProjects": "Course Projects",
        "otherSkills" : "And others like basic scripting with Python, Object Oriented Programming, Branding, UX/UI focus.",
        "luxTitle": 'Express Web Application for a cloud mining service.',
        "luxTech": `I was brought in to work as a full stack developer to try and finish the project which had suffered from development problems.\n\nI was in charge of:\n* The migration from Bootstrap 3.3.7 to Bootstrap 4.3\n* Doing a minor rework of the whole UI\n* Making the client Mobile responsive\n* Making sure the API was robust and secure.\n* Bug testing the API and client`,
        "snapTitle": "Instagram copyWork - A social media network that lets you share pictures and comment on them",
        "snapTech": `The tech used in the front end was:\n*React Native\n*Redux for state management\n*Redux thunk for async operations\n and for the back end: \n*NodeJs - ExpressJs\n*MongoDB\n*Multer`,
        "reactiveTitle":'A mobile app that lets you write notes or draw, and save them',
        "reactiveTech": `The stack used in the frontend was: \n*React Native\n*Redux\n and we used the native Storage to store information.\n No backend was used.`,
        "shoppingTitle": "Amazon Copywork-An E-commerce web App, that lets you put things into your cart and go to checkout",
        "shoppingTech": `The stack used in the frontend was: \n*Reactjs\n*Material-ui\n and for the backend:\n*NodeJs - ExpressJs\n*Postgresql`,
        "tripleteTitle": "A betting web app where you bet on soccer matches",
        "tripleteTech": `The stack used in the frontend was:\n*Jquery\n*Bootstrap 4\nand for the backend: \n*NodeJs - ExpressJs\n*Postgresql`,
        "whiteboardTitle": "A web app that lets you and your friends draw online",
        "whiteboardTech": `The stack used in the frontend was: \n*Bootrstrap 3\n*Socket-io\n and for the backend:\n*Java Servlets.\n no Database was used.`,
        "movieTitle": "A mobile app containing information on all your favorite movies",
        "movieTech": `The stack used in the frontend was:\n*Ionic 3\n and for the backend we used the IMDB API to fetch movie data.`,
        "note1": "This portfolio was developed using ReactJS 16.8.6, with it's latest feature:",
        "note2": "This portfolio is mobile friendly, you can try it out on your phone or tablet.."
      }
    }
    ,es:{
      translation: {
        "jobTitle": "Ing. de Computacion y Desarrollador de Software",
        "summary": `Soy un ingeniero de Computacion y tengo 21 años. Me gradué de la Universidad Rafael Urdaneta en mayo de 2019.\n\nMe especializo en el desarrollo web, desde sitios web estáticos a aplicaciones web progresivas, utilizando las últimas herramientas populares como React y NodeJS, y me fascina ver cómo comienza un proyecto y se convierte en un producto desplegado que la gente pueda disfrutar.\n\nTambien he desarrollado múltiples aplicaciones móviles dirigidas a dispositivos Android, que eran compatibles con cualquier dispositivo moderno o obsoleto, gracias a mi enfoque en el diseño adaptable, la accesibilidad y el rendimiento.`,
        "skills":"Conocimientos",
        "aboutMe":"Acerca de mí",  
        "contactMe":"Contáctame",      
        "workProjects": "Trabajos",
        "courseProjects": "Proyectos",
        "otherSkills": "Y otros como scripting basico con Python, Programacion orientada a objetos, Marca personal, Enfoque en UI/UX, Hosteo y mantenimiento de servidores, entre otros.",
        "luxTitle": 'Aplicacion Express Web para la venta de servicios de Minado en la nube',
        "luxTech": `Me contrataron para trabajar como desarrollador de pila completa para intentar finalizar el proyecto que había sufrido problemas de desarrollo.\n\nEstaba a cargo de: \n* La migración de Bootstrap 3.3.7 a Bootstrap 4.3 \n* Se hizo un pequeño trabajo de revisión de toda la interfaz de usuario \n* Haciendo que el cliente responda de forma móvil \n* Asegurárme de que la API fuera robusta y segura.\n *librar de bugs y probar la API y el cliente`,
        "snapTitle": "Copia de Instagram - Una red social que te permite compartir fotos y comentarlas.",
        "snapTech": `El stack usado en el front end fue :\n*React Native\n*Redux para manejo de estados\n*Redux thunk para operaciones asincronas\n y para el back end: \n*NodeJs - ExpressJs\n*MongoDB\n*Multer`,
        "reactiveTitle":'Una aplicación móvil que te permite escribir notas o dibujar, y guardarlas',
        "reactiveTech": `El stack usado en el front end fue : \n*React Native\n*Redux\n y se utilizo el Almacenamiento nativo para guardar informacion.\n No se necesito un servidor..`,
        "shoppingTitle": "Amazon Copywork - una aplicación web de comercio electrónico que le permite poner cosas en su carrito para comprar",
        "shoppingTech": `El stack usado en el front end fue : \n*Reactjs\n*Material-ui\n y para el backend:\n*NodeJs - ExpressJs\n*Postgresql`,
        "tripleteTitle": "Una aplicación web de apuestas donde apuestas en partidos de fútbol.",
        "tripleteTech": `El stack usado en el front end fue :\n*Jquery\n*Bootstrap 4\ny para el backend: \n*NodeJs - ExpressJs\n*Postgresql`,
        "whiteboardTitle": "Una aplicación web que te permite a ti y a tus amigos dibujar en línea",
        "whiteboardTech": `El stack usado en el front end fue : \n*Bootrstrap 3\n*Socket-io\n y para el backend:\n*Java Servlets.\n No se necesitó una base de datos.`,
        "movieTitle": "Una aplicación móvil que contiene información sobre todas tus películas favoritas.",
        "movieTech": `El stack usado en el front end fue :\n*Ionic 3\n y para el backend usamos la API de imdb para conseguir informacion sobre peliculas.`,
        "note1": "Este portafolio fue desarrollado usando ReactJS 16.8.6, con su ultimo feature:",
        "note2": "Este portafolio fue diseñado para funcionar en equipos moviles, puedes probarlo en tu telefono o tablet."
      }
    }
  },
    lng: "es",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;