import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
      translation: {
        "name":"Hi, my name is ",
        "jobTitle": "Computer Engineer & Software Developer",
        "skills": "Skills",
        "aboutMe":"About me",
        "contact":"Contact",
        "contactMe":"Contact Me",
        "workProjects": "Projects I've worked on",
        "courseProjects": "Projects",
        "otherSkills" : "And others like basic scripting with Python, Object Oriented Programming, Branding, UX/UI focus.",
        "luxTitle": 'Express Web Application for a cloud mining service.',
        "luxTech": `I was brought in to work as a full stack developer to try and finish the project which had suffered from development problems.\n\nI was in charge of:\n* The migration from Bootstrap 3.3.7 to Bootstrap 4.3\n* Doing a minor rework of the whole UI\n* Making the client Mobile responsive\n* Making sure the API was robust and secure.\n* Bug testing the API and client`,
        "note1": "Let's build awesome things",
        "note2": "With over 2 years of Software Development experience, I have learned many skills and technologies that allow me to consistently deliver quality work to my clients",
        "projectsNote":"In my time as a developer, I've had the opportunity to work on multiple projects that taught me a lot of design principles, best practices and programming in general",
        "keystoneNote": "A React single page application that allows the company to sell or rent their properties to residents of Maracaibo through the internet",
        "luxNote": "A Cloud Mining solution that allows you to rent a mining machine for your favorite cryptocurrencies",
        "contactNote":"Why don't we work together to build your vision?",
        "contactNote2":"Get in contact with me, no strings attached",
        "message":"Email content",
        "fullname":"Full Name",
        "location":"Location",
        "email":"I've recieved your email! I'll be in contact with you as soon as possible",
        "footerText1": "Made with ",
        "footerText2": "in Venezuela",
        "copyright":"All rights reserved",
        "copyright2": "Fabio Pineda ©️ 2020"
      }
    }
    ,es:{
      translation: {
        "name":"Hola, mi nombre es ",
        "jobTitle": "Ing. de Computacion y Desarrollador de Software",
        "skills":"Conocimientos",
        "aboutMe":"Acerca de mí", 
        "contact": "Contáctame", 
        "contactMe":"Contáctame",      
        "workProjects": "Proyectos en lo que he trabajado",
        "courseProjects": "Proyectos",
        "otherSkills": "Y otros como scripting basico con Python, Programacion orientada a objetos, Marca personal, Enfoque en UI/UX, Hosteo y mantenimiento de servidores, entre otros.",
        "luxTitle": 'Aplicacion Express Web para la venta de servicios de Minado en la nube',
        "luxTech": `Me contrataron para trabajar como desarrollador de pila completa para intentar finalizar el proyecto que había sufrido problemas de desarrollo.\n\nEstaba a cargo de: \n* La migración de Bootstrap 3.3.7 a Bootstrap 4.3 \n* Se hizo un pequeño trabajo de revisión de toda la interfaz de usuario \n* Haciendo que el cliente responda de forma móvil \n* Asegurárme de que la API fuera robusta y segura.\n *librar de bugs y probar la API y el cliente`,
        "note1": "Creemos cosas increibles",
        "note2": "Con 2 años de experiencia como desarrollador de software, he obtenido conocimientos y aprendido tecnologias que me permiten entregar productos de calidad a mis clientes consistentemente.",
        "projectsNote":"En mi tiempo como desarrollador, he tenido la oportunidad de trabajar en multiples proyectos que me enseñaron mucho sobre principios de diseño, mejores practicas y programacion en general",
        "keystoneNote": "Single page application hecha con React que le permite a la compañia vender o rentar sus propiedades a residentes de Maracaibo a traves de el internet",
        "luxNote": "Solucion de minado en la nube que te permite rentar equipos para minar tus criptomonedas favoritas",
        "contactNote":"Porque no trabajamos juntos?",
        "contactNote2":"Ponte en contacto conmigo, sin compromisos",
        "message":"Contenido del correo",
        "fullname":"Nombre Completo",
        "location":"Ubicacion",
        "email":"He recibido tu mensaje! Trataré de responder lo mas pronto posible",
        "footerText1": "Hecho con ",
        "footerText2": "en Venezuela",
        "copyright":"Todos los derechos reservados",
        "copyright2": "Fabio Pineda ©️ 2020"
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