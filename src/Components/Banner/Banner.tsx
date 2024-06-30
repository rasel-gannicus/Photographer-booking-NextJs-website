import Image from "next/image";
import BannerLeft from "./Banner-Left/BannerLeft";
import BannerRight from "./Banner-Right/BannerRight";
import BannerMid from "./Banner-Mid/BannerMid";

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
        <BannerLeft />

        {/* ----------------- Banner Mid Section --------------------- */}

        <BannerMid />

        {/* ----------------- Banner Right Section --------------------- */}
        <BannerRight />
      </div>
    </div>
  );
};

export default Banner;
