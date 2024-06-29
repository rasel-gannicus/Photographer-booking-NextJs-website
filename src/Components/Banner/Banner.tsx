import Image from "next/image";
import bannerImg from "@/assets/img/thom-holmes-2D9rPQClqKo-unsplash.jpg";
import signature from "@/assets/img/signature ss.png";
import signature2 from "@/assets/img/signature bold.png";
import "./Banner.css";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className=" banner-div relative flex-col justify-center items-center">

      {/* ----------------- Banner Header  --------------------- */}
      <div className=" text-center uppercase mt-20 border-b-4 border-t-4">
        <h2 className="  text-4xl md:text-8xl font-extrabold">
          Photo<span className="text-[#F67055]">graphy</span>{" "}
        </h2>
      </div>

      <div className="flex flex-col md:flex md:flex-row justify-between items-center relative ">
        {/* ----------------- Banner Left Section --------------------- */}

        <div className=" hidden  md:flex  banner-left flex-1 relative  min-h-[370px] flex-col justify-center items-center  ">
          <div
            className=" absolute top-0"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="-rotate-[30deg] ">
              <h2 className="text-6xl font-bold text-[#F67055]">20K+</h2>
              <p className="font-bold text-gray-400 ">
                Customers all over <br />
                the world
              </p>
            </div>
          </div>

          <div
            className=" absolute -bottom-5"
            style={{ left: "20%", transform: "translateX(-20%)" }}
          >
            <div className="border-4 p-3 w-40 rounded-md shadow-lg bg-white -rotate-[30deg]  ">
              <Image
                src={"https://i.ibb.co/QC9v3FN/wild-6.jpg"}
                alt="banner left"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div
            className=" absolute -bottom-0"
            style={{ right: "30%", transform: "translateX(-30%)" }}
          >
            <div className="border-4 p-3 w-40 rounded-md shadow-lg bg-white -rotate-[30deg]   ">
              <Image
                src={
                  "https://i.ibb.co/C9cJTwg/mark-pan4ratte-2x5-Eq-Shzu-E8-unsplash-1.jpg"
                }
                alt="banner left"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div
            className=" absolute -bottom-20"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="border-4 p-3 w-36 rounded-md shadow-lg bg-white -rotate-[30deg]   ">
              <Image
                src={
                  "https://i.ibb.co/z4ZW13j/bekah-allmark-Qt0og-Pnh-GWY-unsplash-1.jpg"
                }
                alt="banner left"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* ----------------- Banner Mid Section --------------------- */}

        <div className="banner-mid  ">
          <div className=" relative  w-full md:w-20 md:h-[570px]">

            {/* --- banner image for large screen --- */}

            <Image
              src={
                "https://photographer-portfolio-website-advance.vercel.app/static/media/banner-bg.bd7782d8b5405a4d62c3.png"
              }
              alt="banner image"
              // fill
              className=" z-50 bottom-0 absolute hidden md:block"
              quality={100}
              width={800}
              height={500}
              style={{
                maxWidth: "550px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            {/* --- banner image for mobile screen --- */}
            <Image
              src={
                "https://photographer-portfolio-website-advance.vercel.app/static/media/banner-bg.bd7782d8b5405a4d62c3.png"
              }
              alt="banner image"
              // fill
              className=" z-50 md:hidden"
              quality={100}
              width={600}
              height={500}
              // style={{
              //   maxWidth: "550px",
              // }}
            />

          </div>
        </div>

        {/* ----------------- Banner Right Section --------------------- */}

        <div className="banner-right flex-1 ">
          <div className=" flex-col justify-center items-center text-center ">
            <Image
              src={signature2}
              alt="signature"
              width={500}
              height={300}
              className="mx-auto hidden md:block"
            />
            <h3 className=" text-gray-500 text-4xl font-semibold mb-5 md:-mt-10">
              Book Your <br /> Schedule
            </h3>
            <Button
              variant="outline"
              className="h-12 rounded-full border-black border-2 px-9"
            >
              Lets Talk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
