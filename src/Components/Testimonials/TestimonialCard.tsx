"use client";
import Image from "next/image";
import testImg from "../../assets/img/street-21.jpg";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import leftArrow from "@/assets/img/left-arrow-svgrepo-com.png";
import rightArrow from "@/assets/img/right-arrow-svgrepo-com.png";
import { getImg, getShortBio, getText } from "@/utils/carouselFunctions";

const TestimonialCard = () => {
  let [count, setCount] = useState(0);

  function handleClickIncrease() {
    if (count < 2) {
      setCount(++count);
    } else if (count == 2) {
      setCount(0);
    }
  }

  function handleClickDecrease() {
    if (count == 0) {
      setCount(2);
    } else if (count > 0) {
      setCount(--count);
    }
  }

  return (
    <div className="bg-[#4A4B7C] w-[80%] relative rounded">
      <div className=" py-14 ps-10 text-gray-200  w-[70%]">
        <hr className="w-20 border-b-4 mb-10 border-slate-400" />
        <TransitionGroup className="relative min-h-32">
          <CSSTransition key={count} timeout={500} classNames="fade">
            <p className="text-xl  absolute">{getText(count)}</p>
          </CSSTransition>
        </TransitionGroup>

        <hr className=" border-b mb-10  border-slate-400 mt-10" />
        <TransitionGroup className="relative min-h-12">
          <CSSTransition key={count} timeout={500} classNames="fade">
            <div className="absolute">{getShortBio(count)}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <TransitionGroup className="">
          <CSSTransition key={count} timeout={500} classNames="fade">
            {getImg(count)}
          </CSSTransition>
        </TransitionGroup>

      <div className="flex justify-center items-center gap-5 absolute bottom-[14%] translate-y-[-14%] right-[25%] translate-x-[-25%]  ">
        <div
          onClick={handleClickIncrease}
          className="border-4 p-2 rounded-full cursor-pointer"
        >
          <Image src={leftArrow} alt="" width={30} />
        </div>
        <div
          onClick={handleClickDecrease}
          className="border-4 p-2 rounded-full cursor-pointer"
        >
          <Image src={rightArrow} alt="" width={30} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
