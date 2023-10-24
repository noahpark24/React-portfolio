import { useSelector } from 'react-redux';
//Idiom switch
import translate from '../../config/idiomConfig';
//Types
import IdiomState from '../../types/state';
import { navLinks } from '../../types/linkTypes';

const Links = (): navLinks[] => {
  const idiom = useSelector((state: IdiomState) => state.idiom);

  const navLinks = [
    {
      id: 1,
      link: translate(idiom, 'nav.home'),
    },
    {
      id: 2,
      link: translate(idiom, 'nav.about'),
    },
    {
      id: 3,
      link: translate(idiom, 'nav.experience'),
    },
    {
      id: 4,
      link: translate(idiom, 'nav.portfolio'),
    },
    {
      id: 5,
      link: null,
      text: idiom,
    },
  ];
  return navLinks;
};

export default Links;
