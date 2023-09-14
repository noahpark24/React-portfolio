const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      {/* agregar name="about*/}
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi!, My name is Ivan , I'm graduated from a 4 month bootcamp in which
          I committed myself to learning for 8–10 hours daily per week,
          dedicating time to workshops and team projects using the agile SCRUM
          methodology and organizing ourselves with Trello. During my
          participation in the bootcamp, I had the opportunity to do a
          Professional practice of 1 month with Ceibo Digital.
        </p>

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
