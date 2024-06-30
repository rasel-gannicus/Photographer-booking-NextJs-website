import { Button } from "../ui/button";
import './HireMe.css'; 

const HireMe = () => {
  return (
    <div className="my-20 md:my-0 hire-me-div py-[400px] md:bg-right ">
      <h2 className=" text-4xl md:text-8xl text-[#4A4B7C] font-bold">
        Hire Me for Your <br />
        Next Project
      </h2>
      <Button
        variant="secondary"
        className="px-3 py-7 text-lg mt-10  shadow-2xl bg-[#4A4B7C] text-white rounded "
      >
        Contact Me
      </Button>
    </div>
  );
};

export default HireMe;
