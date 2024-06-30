import serviceImg from "@/assets/img/services-02-free-img.png";
import Image from "next/image";
import ServiceCard from "./Service Card/ServiceCard";

const Services = async () => {
  // --- fetching data with SSG(Static Site Generation) method
  const res = await fetch(
    "https://raw.githubusercontent.com/shafik720/rest-api/main/photographer-package.json",
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  //   console.log(data);
  return (
    <div className="my-40 md:grid grid-cols-3">

      <div className="service-div  relative order-1 min-h-[757px]">
        <h2 className=" text-6xl md:text-7xl font-bold text-[#4A4B7C]">Services</h2>
        <Image
          src={serviceImg}
          alt="service img"
          quality={100}
          className="absolute -top-14"
        />
      </div>

      <div className="service-div flex flex-col gap-y-5 items-center">
        {data.length > 0 &&
          data.map(
            (index: TService) =>
              index.mainCatagory == "wedding" && (
                <ServiceCard data={index} key={index.id}></ServiceCard>
              )
          )}
      </div>

      <div className="service-div flex flex-col gap-y-5 items-center order-1">
        {data.length > 0 &&
          data.map(
            (index: TService) =>
              index.mainCatagory == "portrait" && (
                <ServiceCard data={index}  key={index.id}></ServiceCard>
              )
          )}
      </div>
    </div>
  );
};

export default Services;
