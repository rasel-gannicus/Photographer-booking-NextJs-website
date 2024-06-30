import serviceImg from '@/assets/img/services-02-free-img.png'
import Image from 'next/image';

const Services = () => {
    return (
        <div className="my-20 md:grid grid-cols-3">
            <div className="service-div"></div>
            <div className="service-div  relative">
                <h2 className='md:text-7xl font-bold '>Services</h2>
                <Image src={serviceImg} alt='service img' quality={100} className='absolute -top-14' />
            </div>
            <div className="service-div"></div>
        </div>
    );
};

export default Services;