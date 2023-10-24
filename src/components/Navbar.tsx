//icons
import { FaBars, FaTimes } from 'react-icons/fa';
//Redux And React
import { useState } from 'react';

//utils
import links from '../utils/links/navLinks';
import useToggleLanguage from '../utils/functions/toggleLanguague';

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const navLinks = links();

  const toggleLanguage = useToggleLanguage();

  const handleMobileClick = () => {
    setNav(false);
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
            {link.link ? (
              <a href={'#' + link.link}>{link.link}</a>
            ) : (
              <p onClick={() => toggleLanguage()}>{link.text}</p>
            )}
          </li>
        ))}
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
              {link.link ? (
                <a onClick={handleMobileClick} href={'#' + link.link}>
                  {link.link}
                </a>
              ) : (
                <span
                  onClick={() => {
                    handleMobileClick();
                    toggleLanguage();
                  }}
                >
                  {link.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
