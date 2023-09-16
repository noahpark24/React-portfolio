//utils
import SocialMediaLinks from '../utils/socialMediaLinks';

const SocialLinks = () => {
  const links = SocialMediaLinks();
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
              ' ' +
              link.style
            }
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white "
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
