//Icons
import linkedin from '../../assets/ContactLinksImages/linkedin.png';
import github from '../../assets/ContactLinksImages/github.png';
import email from '../../assets/ContactLinksImages/email.png';
import cv from '../../assets/ContactLinksImages/cv.png';

const contactLinks = [
  {
    id: 1,
    src: linkedin,
    title: 'linkedin',
    style: 'shadow-blue-500',
    href: 'https://www.linkedin.com/in/ivan-correa-1b9a7322a/',
  },
  {
    id: 2,
    src: github,
    title: 'GITHUB',
    style: 'shadow-cyan-500',
    href: 'https://github.com/noahpark24',
  },
  {
    id: 3,
    src: email,
    title: 'email',
    style: 'shadow-purple-500',
    href: 'mailto:ivan.correa24@yahoo.com',
  },
  {
    id: 4,
    src: cv,
    title: 'Curriculum',
    style: 'shadow-red-400',
    href: '/resume.pdf',
    download: true,
  },
];

export default contactLinks;
