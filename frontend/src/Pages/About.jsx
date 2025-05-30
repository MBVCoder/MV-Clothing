import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/Newsletterbox"

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate aliquam, at eveniet atque eaque, consectetur aliquid
            nesciunt dicta consequatur, reprehenderit quas dolorum distinctio
            dolore deserunt commodi in facere aspernatur? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quia modi in deserunt aut
            dolorem, qui, ea ducimus, nostrum iusto incidunt ipsum optio
            distinctio officia dignissimos. Magni molestias expedita deleniti
            itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            voluptates distinctio impedit dicta. Quisquam, possimus ex quaerat
            esse error reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam, ratione?
          </p>
          <b>Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            maiores. Eius, eveniet. Pariatur nisi alias facere, ipsum provident
            exercitationem fugiat!
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dignissimos vero iure sed consequatur suscipit vitae eaque
            perferendis quo asperiores!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dignissimos vero iure sed consequatur suscipit vitae eaque
            perferendis quo asperiores!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            dignissimos vero iure sed consequatur suscipit vitae eaque
            perferendis quo asperiores!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
