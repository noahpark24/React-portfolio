//utils
import portfolios from '../utils/links/proyectsLinks';
//Redux
import { useSelector } from 'react-redux';
//Types
import IdiomState from '../types/state';
//Idiom switch
import translate from '../config/idiomConfig';

const Portfolio = () => {
  const idiom = useSelector((state: IdiomState) => state.idiom);
  return (
    <div
      id={translate(idiom, 'portfolio.id')}
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:pt-12">
          {/*TITLE AND SUBTITLE*/}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            {translate(idiom, 'portfolio.title')}
          </p>
          <p className="py-6 text-white">
            {translate(idiom, 'portfolio.subtitle')}
          </p>
        </div>

        {/*Projects Card And Images */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-28">
          {portfolios.map(({ id, src, href, projectName, techs }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg relative"
            >
              <a href={href}>
                <img
                  src={src}
                  alt="clubDelPlan Home.jpeg"
                  className="rounded-md duration-200 hover:scale-75 max-h-44 h-44 w-full"
                />
              </a>

              {/*Hover Texts*/}
              <a href={href}>
                <div className="bg-black bg-opacity-50 text-white absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p>{projectName}</p>
                </div>
              </a>

              {/* Tech Icons */}
              <div className="flex items-center justify-center mt-5 pb-4">
                {techs.map((tech, index) => (
                  <img
                    key={index}
                    src={tech.src}
                    className="w-8 h-8 mx-2 "
                    alt={tech.alt}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
