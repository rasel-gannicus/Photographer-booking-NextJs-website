import Image from "next/image";
import { Button } from "../ui/button";
import aboutBg from "@/assets/img/camera-7726802.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="my-20 md:grid grid-cols-2 about-section min-h-[668px]">
      <div className="relative about-left flex flex-col justify-center items-center text-white bg-fixed">
        <div className="bg-black absolute left-0 right-0 top-0 bottom-0 opacity-55 z-0"></div>
        <div className="z-10  flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold my-5">
            Interested In My Services ?{" "}
          </h2>
          <Button variant="secondary" className="px-5 py-10 text-2xl font-bold" >Contact Me</Button>
        </div>
      </div>
      <div className="about-right bg-white   md:flex md:flex-col justify-center container">
        <h2 className="font-bold text-7xl mb-5 ">About Me</h2>
        <p className="text-gray-400 text-lg text-justify">
          A Professional Photographer from a Small City in Bangladesh. I am a
          self taught Nerd. I have been doing Photography for more than a
          Decade. I have won several awards and four International Awards for
          Photography. Street & Wild-life Photography is my favourite Genre. I
          also have a good hand In Wedding & Portfolio Area. Some of my sample
          works are given below.
        </p>
      </div>
    </div>
  );
};

export default About;
