//Redux
import { useSelector } from 'react-redux';
//Types
import IdiomState from '../types/state';
//Idiom switch
import translate from '../config/idiomConfig';

const About = () => {
  const idiom = useSelector((state: IdiomState) => state.idiom);
  return (
    <div
      id={translate(idiom, 'about.id')}
      className="w-full h-screen bg-gray-800 to-black text-white pb-60"
    >
      {/* agregar name="about*/}
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {translate(idiom, 'about.title')}
          </p>
        </div>

        <p className="text-xl mt-20">{translate(idiom, 'about.content')}</p>

        {/* <p className="text-xl mt-5">
          My passion for programming arose from When I was 17 years old, I
          decided to develop my first web page using HTML and CSS. This
          experience motivated me to seek a more solid formation in the
          programming field so I joined a bootcamp with the aim of
          professionalizing and acquire knowledge of good practices as well as
          learn how to work in a development team
        </p> */}
      </div>
    </div>
  );
};

export default About;
