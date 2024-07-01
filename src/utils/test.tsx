
export const getImg = (count: number) => {
    switch (count) {
      case 0:
        return (
          <Image
            src={clientImg1}
            alt="testimonial pic"
            width={440}
            className="absolute w-[220px] lg:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] lg:-top-20 lg:-right-48 shadow-2xl drop-shadow-2xl"
          />
        );
      case 1:
        return (
          <Image
            src={clientImg2}
            alt="testimonial pic"
            width={440}
            className="absolute w-[220px] lg:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] lg:-top-20 lg:-right-48 shadow-2xl drop-shadow-2xl"
          />
        );
      case 2:
        return (
          <Image
            src={clientImg3}
            alt="testimonial pic"
            width={440}
            className="absolute w-[220px] lg:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] lg:-top-20 lg:-right-48 shadow-2xl drop-shadow-2xl"
          />
        );
      default:
        return (
          <Image
            src={clientImg1}
            alt="testimonial pic"
            width={440}
            className="absolute w-[220px] lg:w-[440px] -top-32 right-0 left-[50%] translate-x-[-50%] lg:-top-20 lg:-right-48 shadow-2xl drop-shadow-2xl"
          />
        );
    }
  };