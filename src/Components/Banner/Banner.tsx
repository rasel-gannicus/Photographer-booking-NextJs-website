import Image from "next/image";
import bannerImg from "@/assets/img/thom-holmes-2D9rPQClqKo-unsplash.jpg";
import signature from "@/assets/img/signature ss.png";
import signature2 from "@/assets/img/signature bold.png";
import "./Banner.css";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className=" banner-div relative flex-col justify-center items-center">
      <div className=" text-center uppercase mt-20 border-b-4 border-t-4">
        <h2 className="text-8xl font-extrabold">
          Photo<span className="text-[#F67055]">graphy</span>{" "}
        </h2>
      </div>
      <div className="flex justify-between items-center relative   ">
        {/* ----------------- Banner Left Section --------------------- */}

        <div className="banner-left = flex-1 relative  min-h-[370px] flex  flex-col justify-center items-center">
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
            className=" absolute bottom-0"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="border-4 p-3 w-40 rounded-md shadow-lg -rotate-[30deg]  ">
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
          <div
            className=" absolute bottom-0"
            style={{ left: "20%", transform: "translateX(-20%)" }}
          >
            <div className="border-4 p-3 w-40 rounded-md shadow-lg -rotate-[30deg]  ">
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
          <div className=" relative  w-20 h-[570px] ">
            <Image
              src={
                "https://photographer-portfolio-website-advance.vercel.app/static/media/banner-bg.bd7782d8b5405a4d62c3.png"
              }
              alt="banner image"
              // fill
              className=" z-50 bottom-0 absolute"
              quality={100}
              width={800}
              height={500}
              style={{
                maxWidth: "550px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
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
              className="mx-auto "
            />
            <h3 className="text-4xl font-semibold mb-5 -mt-10">
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
