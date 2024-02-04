import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl p-2 bg-blue-700 border-4 border-gray-600 rounded-2xl text-black w-full text-center font-extrabold">
        About
      </h1>
      <div className="my-2">
        <div className="flex flex-col items-center justify-center ">
          <p>Initialize! Thrive!</p>
          <p>A Code to the Program turns to take off toward a dream!</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-5">
          <p>
            Hello, I'm Dan Koyuki or You might known me as Irwanto Danang
            Bahtiar.
          </p>
          <p>
            Originally from Majalengka, currently i'm pursuing my studies in
            Informatics at State Islamic University of Sunan Gunung Djati
            Bandung.
          </p>
          <p>
            I thrive on the challenges that programming presents, constantly
            seeking to refine my skills and broaden my horizons.
          </p>
          <p>
            The prospect of creating innovative web and mobile solutions
            exhilarates me, driving my commitment to contribute meaningfully to
            this ever-evolving field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
