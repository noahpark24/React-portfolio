import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import photo from '../assets/profile.png';

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      {/* TEXT*/}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm A Full-Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I Like Working On Web And Mobile Applications. My Preferred Stack Is
            PERN. Also, I Have Experience With MERN Stack Too.
          </p>

          {/*Portfolio Button*/}
          <div>
            <a href="#portfolio">
              <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
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
