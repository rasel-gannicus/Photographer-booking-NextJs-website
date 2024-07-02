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
      <h2 className="my-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem vero beatae deleniti, unde vitae nesciunt. Officiis, ipsa cum! Blanditiis similique debitis eaque pariatur, architecto cupiditate distinctio facere neque autem adipisci illum reiciendis recusandae praesentium? At dicta quos fugiat </h2>
    </main>
  );
}
