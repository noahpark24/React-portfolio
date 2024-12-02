//utils
import contactLinks from '../utils/links/contactSectionLinks';
//Redux
import { useSelector } from 'react-redux';
//Types
import IdiomState from '../types/state';
//Idiom switch
import translate from '../config/idiomConfig';

const Contact = () => {
  const idiom = useSelector((state: IdiomState) => state.idiom);
  return (
    <div
      id={translate(idiom, 'contact.id')}
      className="bg-gradient-to-b from-gray-800 to-black w-full  text-white md:h-screen pb-50"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/*TITLE AND SUBTITLE*/}
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {translate(idiom, 'contact.title')}
          </p>
          <p className="py-6">{translate(idiom, 'contact.subtitle')}</p>
        </div>
        {/*CONTACT CARD*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {contactLinks.map(({ id, src, title, style, href, download }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              download={download ? 'ivan-correa-cv.pdf' : undefined}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
