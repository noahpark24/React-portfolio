//logos
import typescript from '../assets/Experience logos/typescript logo.png';
import javascript from '../assets/Experience logos/javascript logo.png';
import mongodb from '../assets/Experience logos/mongodb logo.png';
import nodejs from '../assets/Experience logos/nodejs.png';
import postgresql from '../assets/Experience logos/postgresql logo.png';
import react from '../assets/Experience logos/react logo.png';
import reactNative from '../assets/Experience logos/react native logo.png';

//Proyects images
import clubDelPlan from '../assets/HOME.jpeg';
import geekCentral from '../assets/HOME GEEK CENTRAL.png';
import pomodoro from '../assets/Pomodoro Typescript.jpeg';

const portfolios = [
  {
    id: 1,
    src: geekCentral,
    href: 'https://github.com/noahpark24/GeekCentralStore',
    projectName: 'Geek Central Store',
    techs: [
      {
        src: javascript,
        alt: 'javascript logo',
      },
      { src: react, alt: 'react logo' },
      { src: nodejs, alt: 'nodejs logo' },
      { src: postgresql, alt: 'postgresql logo' },
    ],
  },
  {
    id: 2,
    src: clubDelPlan,
    href: 'https://github.com/noahpark24/El-Club-Del-Plan',
    projectName: 'El Club Del Plan',
    techs: [
      {
        src: javascript,
        alt: 'javascript logo',
      },
      { src: reactNative, alt: 'reactNative logo' },
      { src: nodejs, alt: 'nodejs logo' },
      { src: mongodb, alt: 'mongodb logo' },
    ],
  },
  {
    id: 3,
    src: pomodoro,
    href: 'https://github.com/noahpark24/pomodoro-typescript',
    projectName: 'Pomodoro Typescript',
    techs: [
      {
        src: typescript,
        alt: 'typescript logo',
      },
      { src: reactNative, alt: 'reactNative logo' },
    ],
  },
];

export default portfolios;
