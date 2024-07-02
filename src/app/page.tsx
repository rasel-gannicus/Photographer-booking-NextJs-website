import Services from "@/components/Services/Services";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import MyGear from "@/components/My Gear/MyGear";
import HireMe from "@/components/HireMe/HireMe";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="container max-w-[1550px]">
      <Banner /> 
      <About /> 
      <Services />
      <MyGear /> 
      <HireMe />
      <Testimonials />

    </main>
  );
}
