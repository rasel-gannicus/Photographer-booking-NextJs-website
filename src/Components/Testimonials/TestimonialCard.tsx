import Image from "next/image";
import testImg from "../../assets/img/street-21.jpg";
import { Button } from "../ui/button";
import { useState } from "react";

const TestimonialCard = () => {
    let[count, setCount] = useState(0) ;

    function handleClick(){
        // console.log(count);
        if(count < 2){
            setCount(++count);
        }else if(count == 2){
            setCount(0);
        }        
    }

  return (
    <div className="bg-[#4A4B7C] w-[80%] relative rounded">
      <div className=" py-14 ps-10 text-gray-200  w-[70%]">
        <hr className="w-20 border-b-4 mb-10 border-slate-400" />
        <p className="text-xl font-bold transition-all">
          {count == 0 && `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dicta
          consequuntur obcaecati harum voluptate ut omnis ipsum dolores enim!
          Tempore sint porro vitae, nam, laboriosam`}
          {count == 1 && `A Professional Photographer from a Small City in Bangladesh. I am a self taught Nerd. I have been doing Photography for more than a Decade.`}
          {count == 2 && `I have won several awards and four International Awards for Photography. Street & Wild-life Photography is my favourite Genre. I also have a good hand In Wedding & Portfolio Area. Some of my sample works are given below.`}
        </p>

        <hr className=" border-b mb-10  border-slate-400 mt-10" />
        <div className="">
          <p className="text-lg font-semibold">Jonathan Wick</p>
          <p className="text-gray-400">Local Assasin</p>
        </div>
      </div>
      <Image
        src={testImg}
        alt="testimonial pic"
        width={440}
        className="absolute -top-20 -right-48 shadow-2xl drop-shadow-2xl"
      />
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};

export default TestimonialCard;
