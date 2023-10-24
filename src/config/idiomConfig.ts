interface Texts {
  [key: string]: string;
}

//indico que texts debe tener keys que sean string y que cumplan con lo que pide la interfaz Texts
const texts: Record<string, Texts> = {
  ENG: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'home.id': 'Home',
    'home.title': "I'm A Full-Stack Developer jr",
    'home.preferences':
      'I Like Working On Web And Mobile Applications. My Preferred Stack Is PERN. Also, I Have Experience With MERN Stack Too',
    'home.button': 'Portfolio',
    'about.id': 'About',
    'about.title': 'About',
    'about.content':
      "Hi!, My name is Ivan , I'm graduated from a 4 month bootcamp in which I committed myself to learning for 8–10 hours daily per week, dedicating time to workshops and team projects using the agile SCRUM methodology and organizing ourselves with Trello. During my participation in the bootcamp, I had the opportunity to do a Professional practice of 1 month with Ceibo Digital.",
    'portfolio.id': 'Portfolio',
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Checkout some of my work right here',
    'experience.id': 'Experience',
    'experience.title': 'Experience',
    'experience.subtitle': "These Are Technologies I've Worked With",
    'contact.id': 'Contact',
    'contact.title': 'Contact',
    'contact.subtitle':
      'These are the places where you can contact me or check my work',
    'socialLinks.cv': 'Resume',
  },
  ESP: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mi',
    'nav.portfolio': 'Portafolio',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'home.id': 'Inicio',
    'home.title': 'Soy Un Full-Stack Developer jr',
    'home.preferences':
      'Me gusta trabajar en aplicaciones web y móviles. Mi stack preferido es PERN, también tengo experiencia con el stack MERN',
    'home.button': 'Portafolio',
    'about.id': 'Sobre Mi',
    'about.title': 'Sobre Mi',
    'about.content':
      '¡Hola! Mi nombre es Ivan. Me gradué de un bootcamp de 4 meses en el cual me comprometí a aprender durante 8-10 horas al día, dedicando tiempo a talleres y proyectos en equipo utilizando la metodología ágil SCRUM y organizándonos con Trello. Durante mi participación en el bootcamp, tuve la oportunidad de hacer una práctica profesional de 1 mes con Ceibo Digital.',
    'portfolio.id': 'Portafolio',
    'portfolio.title': 'Portafolio',
    'portfolio.subtitle': 'Mira algunos de mis proyectos aquí',
    'experience.id': 'Experiencia',
    'experience.title': 'Experiencia',
    'experience.subtitle':
      'Estas son tecnologias con las que estuve trabajando',
    'contact.id': 'Contacto',
    'contact.title': 'Contacto',
    'contact.subtitle':
      'Estos los lugares donde puedes contactarme o ver mi trabajo',
    'socialLinks.cv': 'Curriculum',
  },
};

//Retorna el texto en el idioma que reciba
const translate = (idiom: string, id: string) => {
  return texts[idiom]?.[id];
};

export default translate;
