import Image from "next/image";
import gear1 from "@/assets/img/gear.jpg";
import gear2 from "@/assets/img/gear2.jpg";

const MyGear = () => {
  return (
    <div className="md:grid grid-cols-2 gap-10 bg-[#4A4B7C] rounded-sm text-white md:min-h-[900px] items-center px-10  py-10">
      <div className="">
        <hr className="w-20 border-b-8 mb-10" />
        <h2 className="text-4xl font-bold">What&apos;s my gear ? </h2>
        <p className="text-gray-400 my-5">
          Though skill is much more important than gear for any field, but a
          bunch of good Gear can make the work more easy and beautiful . Let&apos;s
          have a look at my gear below{" "}
        </p>
        <div className="md:grid grid-cols-2">
          <ul className="list-disc">
            <li>Sony Alpha a1</li>
            <li>Canon EOS 1D</li>
            <li>Sony 7m3</li>
            <li>Manfrotto MT190XPRO3</li>
          </ul>
          <ul className="list-disc">
            <li>DJI Ronin-S</li>
            <li>Nikon SB-700 AF</li>
            <li>Sigma 150-600mm</li>
            <li>Lente Sigma 24-70mm</li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="relative flex flex-col justify-center items-end  min-h-[500px]">
          <Image
            src={gear1}
            alt="gear image"
            className="md:absolute z-30 w-[387px] lg:left-0 lg:top-[200%] lg:translate-y-[-200%] "
            style={{ boxShadow: "12px 7px 124px rgba(0, 0, 0, .9)" }}
          />
          <Image
            src={gear2}
            alt="gear image"
            className=" z-0 w-[387px] hidden lg:block"
            style={{ boxShadow: "0 4px 34px rgba(0, 0, 0, .35)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyGear;
