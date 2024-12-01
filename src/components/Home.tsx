import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
//Photo
import photo from '../assets/profile.png';
//Redux
import { useSelector } from 'react-redux';
//Types
import IdiomState from '../types/state';
//Idiom switch
import translate from '../config/idiomConfig';

const Home = () => {
  const idiom = useSelector((state: IdiomState) => state.idiom);
  return (
    <div
      id={translate(idiom, 'home.id')}
      className="h-screen w-full bg-gray-800   "
    >
      {/* TEXT*/}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {translate(idiom, 'home.title')}
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
            {translate(idiom, 'home.preferences')}
          </p>

          {/*Portfolio Button*/}
          <div>
            <a href={'#' + translate(idiom, 'portfolio.id')}>
              <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 cursor-pointer">
                {translate(idiom, 'home.button')}
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src={photo}
            alt="my profile"
            className="rounded-2xl  md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
