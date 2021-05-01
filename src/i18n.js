import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          salute: 'Hi.',
          name: 'My name is ',
          description1:
            "I'm a Computer Engineer and Software Developer, my area of focus is Web and Mobile development. Most of my projects are published on my",
          description2:
            'I consider myself a focused guy, with a strange curiosity for the unknown that motivates me to learn and improve every day.',
          description3:
            'Outside of programming, I love cryptocurrency, listening to podcast, coffee, and video games.',
          onlyName: 'Fabio Pineda',
          skills: 'Skills',
          aboutMe: 'About me',
          contact: 'Contact',
          contactMe: 'Contact Me',
          workProjects: "Projects I've worked on",
          courseProjects: 'Projects',
          otherSkills:
            'And others like basic scripting with Python, Object Oriented Programming, Branding, UX/UI focus.',
          luxTitle: 'Express Web Application for a cloud mining service.',
          luxTech: `I was brought in to work as a full stack developer to try and finish the project which had suffered from development problems.\n\nI was in charge of:\n* The migration from Bootstrap 3.3.7 to Bootstrap 4.3\n* Doing a minor rework of the whole UI\n* Making the client Mobile responsive\n* Making sure the API was robust and secure.\n* Bug testing the API and client`,
          note1: "Let's build your idea",
          note2:
            'With over 2 years of Software Development experience, I have learned many skills and technologies that allow me to consistently deliver quality work to my clients',
          projectsNote:
            "In my time as a developer, I've had the opportunity to work on multiple projects that taught me a lot of design principles, best practices and programming in general",
          keystoneNote:
            'A React single page application that allows the company to sell or rent their properties to residents of Maracaibo through the internet',
          luxNote:
            'A Cloud Mining solution that allows you to rent a mining machine for your favorite cryptocurrencies',
          contactNote: "Why don't we work together to build your vision?",
          contactNote2: 'Get in contact with me, no strings attached',
          message: 'Email content',
          fullname: 'Full Name',
          location: 'Location',
          email:
            "I've recieved your email! I'll be in contact with you as soon as possible",
          footerText1: 'Made with ',
          footerText2: 'in Venezuela',
          copyright: 'All rights reserved',
          copyright2: 'Fabio Pineda ©️ 2020',
          donorkitNote:
            'A fully featured GoFundMe competitor, allows registered non profit organizations to gather raise funds through campaigns',
          donorkitNote2:
            'Each campaign has their unique campaign view and URL, that can be shared through social media to help raise funds',
          fantasyNote:
            "An Fantasy game for Urban Rooster's Freestyle Master Series, build your roster and win points every season depending on your favorite freestyler's performance",
        },
      },
      es: {
        translation: {
          salute: 'Hola.',
          name: 'Mi nombre es ',
          description1:
            'Soy Ing. de Computación y desarrollador de software, mi área de enfoque es el desarrollo Web y Móvil. La mayoría de mis proyectos se encuentran alojados en mi',
          description2:
            'Me considero una persona perseverante, y con una curiosidad por lo desconocido que me motiva a aprender y ser mejor cada día.',
          description3:
            'Además de mi carrera como desarrollador, me encantan los podcasts, el café y algún día me gustaría aprender a pintar.',
          onlyName: 'Fabio Pineda',
          jobTitle: 'Ing. de Computación y Desarrollador de Software',
          skills: 'Conocimientos',
          aboutMe: 'Acerca de mí',
          contact: 'Contáctame',
          contactMe: 'Contáctame',
          workProjects: 'Proyectos en lo que he trabajado',
          courseProjects: 'Proyectos',
          otherSkills:
            'Y otros como scripting basico con Python, Programacion orientada a objetos, Marca personal, Enfoque en UI/UX, Hosteo y mantenimiento de servidores, entre otros.',
          luxTitle:
            'Aplicacion Express Web para la venta de servicios de Minado en la nube',
          luxTech: `Me contrataron para trabajar como desarrollador de pila completa para intentar finalizar el proyecto que había sufrido problemas de desarrollo.\n\nEstaba a cargo de: \n* La migración de Bootstrap 3.3.7 a Bootstrap 4.3 \n* Se hizo un pequeño trabajo de revisión de toda la interfaz de usuario \n* Haciendo que el cliente responda de forma móvil \n* Asegurárme de que la API fuera robusta y segura.\n *librar de bugs y probar la API y el cliente`,
          note1: 'Creemos cosas increibles',
          note2:
            'Con 2 años de experiencia como desarrollador de software, he obtenido conocimientos y aprendido tecnologías que me permiten entregar productos de calidad a mis clientes consistentemente.',
          projectsNote:
            'En mi tiempo como desarrollador, he tenido la oportunidad de trabajar en múltiples proyectos que me enseñaron mucho sobre principios de diseño, mejores prácticas y programación en general',
          keystoneNote:
            'Single page application hecha con React que le permite a la compañía vender o rentar sus propiedades a residentes de Maracaibo a través del internet',
          luxNote:
            'Solución de minado en la nube que te permite rentar equipos para minar tus criptomonedas favoritas',
          contactNote: '¿Por qué no trabajamos juntos?',
          contactNote2: 'Ponte en contacto conmigo, sin compromisos',
          message: 'Contenido del correo',
          fullname: 'Nombre Completo',
          location: 'Ubicación',
          email:
            '¡He recibido tu mensaje! Trataré de responder lo mas pronto posible',
          footerText1: 'Hecho con ',
          footerText2: 'en Venezuela',
          copyright: 'Todos los derechos reservados',
          copyright2: 'Fabio Pineda ©️ 2020',
          donorkitNote:
            'Una aplicacion competidora a GoFundMe, le permite a organizaciones de caridad registradas recaudar fondos',
          donorkitNote2:
            'Cada campaña creada tiene una vista y un URL unico, que le permite a las organizaciones publicar campañas facilmente a traves de redes sociales',
          fantasyNote:
            'Un juego de Fantasy para la Freestyle Master Series de Urban Rooster, crea un equipo de freestylers y cada puntos cada temporada dependiendo de el rendimiento de tus jugadores',
        },
      },
    },
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
