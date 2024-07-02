import Services from "@/components/Services/Services";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import MyGear from "@/components/My Gear/MyGear";
import HireMe from "@/components/HireMe/HireMe";
import Testimonials from "@/components/Testimonials/Testimonials";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="container max-w-[1550px]">
      <Banner /> 
      <About /> 
      <Services />
      <MyGear /> 
      <HireMe />
      <Testimonials />


      
      <Toaster />
    </main>
  );
}
