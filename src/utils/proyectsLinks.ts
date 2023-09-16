//logos
import typescript from '../assets/Experience logos/typescript logo.png';
import javascript from '../assets/Experience logos/javascript logo.png';
import mongodb from '../assets/Experience logos/mongodb logo.png';
import nodejs from '../assets/Experience logos/nodejs.png';
import postgresql from '../assets/Experience logos/postgresql logo.png';
import react from '../assets/Experience logos/react logo.png';
import reactNative from '../assets/Experience logos/react native logo.png';
import tailwind from '../assets/Experience logos/tailwind logo.png';

//Proyects images
import clubDelPlan from '../assets/HOME.jpeg';
import pomodoro from '../assets/Pomodoro Typescript.jpeg';
import viteTmdb from '../assets/popular movies.png';

const portfolios = [
  {
    id: 1,
    src: viteTmdb,
    href: 'https://github.com/noahpark24/TMDB',
    projectName: 'Vite Tmdb',
    techs: [
      {
        src: javascript,
        alt: 'javascript logo',
      },
      { src: react, alt: 'react logo' },
      { src: tailwind, alt: 'tailwind logo' },
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
