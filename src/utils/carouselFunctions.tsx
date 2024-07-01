import Image from "next/image";

import clientImg1 from "../assets/img/street-21.jpg";
import clientImg2 from "../assets/img/trevor-buntin-m-Qz-ALy-EB-T4-unsplash-1.jpg";
import clientImg3 from "../assets/img/woman in black white.jpg";

export const getText = (count: number) => {
  switch (count) {
    case 0:
      return `Working with this photographer was an absolute pleasure. Their professionalism, creativity, and attention to detail resulted in stunning photos that exceeded our expectations. Highly recommend!`;
    case 1:
      return `Our family photoshoot was an incredible experience. The photographer made us feel comfortable and captured beautiful moments we will cherish forever. Exceptional work, truly talented, and recommended!`;
    case 2:
      return `The wedding photos are beyond beautiful. This photographer captured every special moment perfectly. Their artistic vision and dedication to their craft are evident in every shot. Recommended!`;
    default:
      return "";
  }
};

export const getShortBio = (count: number) => {
  switch (count) {
    case 2:
      return (
        <div>
          <p className="text-lg font-semibold">Jonathan Wick</p>
          <p className="text-gray-400">Local Assasin</p>
        </div>
      );
    case 1:
      return (
        <div>
          <p className="text-lg font-semibold">Abraham Lincoln</p>
          <p className="text-gray-400">Vampire Hunter</p>
        </div>
      );
    case 0:
      return (
        <div>
          <p className="text-lg font-semibold">Shafiqul Hasan Rasel</p>
          <p className="text-gray-400">Web Developer</p>
        </div>
      );
    default:
      return "";
  }
};

export const getImg = (count: number) => {
  switch (count) {
    case 0:
      return (
        <Image
          src={clientImg1}
          alt="testimonial pic"
          width={440}
          className="absolute w-[220px] md:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] md:left-[unset] md:translate-x-[unset] md:-top-20 md:-right-48 shadow-2xl drop-shadow-2xl"
        />
      );
    case 1:
      return (
        <Image
          src={clientImg2}
          alt="testimonial pic"
          width={440}
          className="absolute w-[220px] md:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] md:left-[unset] md:translate-x-[unset] md:-top-20 md:-right-48 shadow-2xl drop-shadow-2xl"
        />
      );
    case 2:
      return (
        <Image
          src={clientImg3}
          alt="testimonial pic"
          width={440}
          className="absolute w-[220px] md:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] md:left-[unset] md:translate-x-[unset] md:-top-20 md:-right-48 shadow-2xl drop-shadow-2xl"
        />
      );
    default:
      return (
        <Image
          src={clientImg1}
          alt="testimonial pic"
          width={440}
          className="absolute w-[220px] md:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] md:left-[unset] md:translate-x-[unset]  md:-top-20 md:-right-48 shadow-2xl drop-shadow-2xl"
        />
      );
  }
};
