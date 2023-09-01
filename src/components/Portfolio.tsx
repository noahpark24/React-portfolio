//utils
import portfolios from '../utils/proyectsLinks';

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:pt-12">
          {/*TITLE AND SUBTITLE*/}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        {/*Projects Card And Images */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <a href={href}>
                <img
                  src={src}
                  alt="clubDelPlan Home.jpeg"
                  className="rounded-md duration-200 hover:scale-75 max-h-44 h-44 w-full"
                />
              </a>

              {/* <div className="flex items-center justify-center mt-5">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
