import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            recusandae laborum error architecto harum blanditiis in et.
            Consequuntur possimus iure tempora vero magni voluptatibus harum
            cupiditate cumque debitis id asperiores quidem, voluptatem quod a
            nisi in cum eos quo sapiente excepturi! Nobis illo, reprehenderit
            architecto nesciunt eos, voluptatem expedita aut ipsa qui vero
            eligendi delectus quidem! Quo vero error cum.
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis
            porro nobis voluptas, consequatur aperiam? Numquam commodi rem
            nostrum quis accusamus, explicabo quos possimus incidunt? Distinctio
            rerum architecto sapiente provident quam eius nostrum amet vero quae
            debitis. Blanditiis, delectus officiis dolorum tenetur consequuntur
            illum necessitatibus atque ducimus amet sequi harum error placeat
            sint? Optio cumque obcaecati quibusdam molestias quos vitae.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            quo debitis id magni quaerat laborum nihil, modi vitae magnam
            doloremque quas autem eveniet, distinctio doloribus corporis
            laboriosam. Doloremque ex quis ducimus ipsum consequuntur voluptate
            magnam impedit id dolor, molestias rem?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            assumenda unde ullam quaerat sit iure fugit quisquam nesciunt eaque
            id.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magnam
            nobis numquam. Voluptates quisquam unde veniam nisi alias nemo sunt.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            possimus, iusto consequuntur doloremque velit laudantium officia
            praesentium quia magni. Rerum?
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
