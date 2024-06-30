import "./ServiceCard.css";

const ServiceCard = ({data} : {data : TService}) => {
    // console.log(data);
  return (
    <div className="wedding-card shadow-lg">
      <div className="wedding-card-upper">
        <img
          src={
            data.thumbImg
          }
          alt=""
        />
      </div>
      <div className="wedding-card-lower ">
        <div className="wedding-card-desc flex flex-col justify-center items-center">
          <h4 className="text-lg font-semibold mt-5 text-[#4A4B7C]">{data?.packageCatagoryName}</h4>
          <button
            //   onClick={bookButton}
            className="book-button"
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="wedding-card-icon border">
        <div className="wedding-card-icon-inner">
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
