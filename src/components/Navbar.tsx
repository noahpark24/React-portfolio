//icons
import { FaBars, FaTimes } from 'react-icons/fa';
//Redux And React
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIdiom } from '../state/idiom';

//utils
import links from '../utils/navLinks';

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const navLinks = links();
  const idiom = useSelector((state: any) => state.idiom);
  const dispatch = useDispatch();
  // console.log('soy el idioma actual : ', idiom);

  const toggleLanguage = () => {
    dispatch(setIdiom(idiom === 'ENG' ? 'ESP' : 'ENG'));
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        {/*Logo*/}
        <a href="#home" className="cursor-pointer font-signature text-5xl ml-2">
          Ivan
        </a>
      </div>

      {/* NAV LINKS */}
      <ul className="hidden md:flex">
        {navLinks.map((link, id) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium  text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            <a href={'#' + link.link}>{link.link}</a>
          </li>
        ))}

        {/* Idiom indicator */}
        <div className="hidden md:flex">
          <div
            onClick={toggleLanguage}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            {idiom}
          </div>
        </div>
      </ul>

      {/*NAV ICONS*/}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/*Mobile NavMenu*/}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0  w-full  h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map((link, id) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              <a href={'#' + link.link}>{link.link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
