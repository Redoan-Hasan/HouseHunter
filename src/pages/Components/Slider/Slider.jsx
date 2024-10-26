// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
    return (
        <div>
        <Swiper className="h-full md:h-full lg:h-full xl:h-[calc(100vh-146px)] rounded-lg"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            <SwiperSlide>
            <div className="relative">
                <img
                className="h-full w-full"
                src="https://i.postimg.cc/Y0165P7R/A-family-enjoying-a-backyard-barbecue.jpg"
                alt=""
                />
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white">Neighborhood Expertise</h1>
                    <p className="py-1 md:py-3 lg:py-3 font-normal md:font-medium lg:font-medium text-base text-white lg:w-[60%]">Benefit from our in-depth knowledge of local neighborhoods. We will help you find the perfect community that aligns with your lifestyle and priorities.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <img
                className="h-full w-full"
                src="https://i.postimg.cc/xT3GgBtT/agent-helping-a-client-look-at-a-home1.jpg"
                alt=""
                />
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-4">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white">Personalized Home Search</h1>
                    <p className="py-1 md:py-3 lg:py-3 text-base font-normal md:font-medium lg:font-medium text-white lg:w-[60%]">Experience a personalized home-finding journey. Our dedicated team will listen to your needs, understand your preferences, and offer tailored recommendations to help you find your dream home.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <img
                className="h-full w-full"
                src="https://i.postimg.cc/zfVnzv5V/living-roomjpg.jpg"
                alt=""
                />
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-4">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white">Comprehensive Residential Options</h1>
                    <p className="py-1 md:py-3 lg:py-3 text-base font-normal md:font-medium lg:font-medium text-white lg:w-[60%]">Discover a wide range of residential properties, from cozy apartments to spacious homes. We offer a diverse selection to meet your unique needs and preferences.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative">
                <img
                className="h-full w-full"
                src="https://i.postimg.cc/Y0wgzxFW/A-handshake-between-a-buyer-and-seller.jpg"
                alt=""
                />
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center p-4">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white">Expert Negotiation</h1>
                    <p className="py-1 md:py-3 lg:py-3 text-base font-normal md:font-medium lg:font-medium text-white lg:w-[60%]">Trust our expertise in negotiating on your behalf. We will advocate for your best interests and ensure you get the most favorable terms for your real estate transaction.</p>
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Slider;
