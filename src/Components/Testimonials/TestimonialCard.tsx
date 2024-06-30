import Image from "next/image";
import testImg from '../../assets/img/street-21.jpg'

const TestimonialCard = () => {
  return (
    <div className="bg-[#4A4B7C] w-[80%] relative rounded">
      <div className=" py-14 ps-10 text-gray-200  w-[70%]">
        <hr className="w-20 border-b-4 mb-10 border-slate-400" />
        <p className="text-xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dicta
          consequuntur obcaecati harum voluptate ut omnis ipsum dolores enim!
          Tempore sint porro vitae, nam, laboriosam 
        </p>

        <hr className=" border-b mb-10  border-slate-400 mt-10" />
        <div className="">
          <p className="text-lg font-semibold">Jonathan Wick</p>
          <p className="text-gray-400">Local Assasin</p>
        </div>
      </div>
      <Image src={testImg} alt="testimonial pic" width={440} className="absolute -top-20 -right-48 shadow-2xl drop-shadow-2xl" />
    </div>
  );
};

export default TestimonialCard;
