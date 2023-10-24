//utils
import technologies from '../utils/links/technologiesLinks';
//Redux
import { useSelector } from 'react-redux';
//Types
import IdiomState from '../types/state';
//Idiom switch
import translate from '../config/idiomConfig';

const Experience = () => {
  const idiom = useSelector((state: IdiomState) => state.idiom);

  return (
    <div
      id={translate(idiom, 'experience.id')}
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen pb-60"
    >
      {/*TITLE AND SUBTITLE*/}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {translate(idiom, 'experience.title')}
          </p>
          <p className="py-6">{translate(idiom, 'experience.subtitle')}</p>
        </div>
        {/*TECHNOLOGIES CARD*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="logo" className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
