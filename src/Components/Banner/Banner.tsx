import Image from "next/image";
import bannerImg from "@/assets/img/thom-holmes-2D9rPQClqKo-unsplash.jpg";
import signature from "@/assets/img/White Modern Minimalist Signature Brand Logo(1).png";
import "./Banner.css";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className=" banner-div min-h-screen flex justify-between items-center">
      <div className="banner-left flex-1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
          tenetur reprehenderit repellat, non architecto nostrum odio maxime ea
          perspiciatis eveniet excepturi exercitationem expedita iure, obcaecati
          consectetur blanditiis est, nesciunt aspernatur ex quas aliquid ab
          voluptatibus. Labore nostrum in iure quasi, esse magnam dolores
          voluptatem, sequi, fuga cum consequatur quas!{" "}
        </p>
      </div>
      <div className="banner-right flex-1 ">
        <div className=" flex-col justify-center items-center text-center">
          <Image src={signature} alt="signature" width={300} height={300} className="mx-auto" />
          <h3 className="text-4xl font-semibold mb-5">
            Book Your <br /> Schedule
          </h3>
          <Button
            variant="outline"
            className="h-12 rounded-full border-black border-2"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
