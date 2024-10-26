import { Link } from "react-router-dom";
import 'animate.css';
import Location from "../Components/Location/Location";



const AboutUs = () => {
    return (
        <div>
            <div className="relative lg:w-[750px] mx-auto">
                <div className="-z-10 ">
                    <img className="rounded-lg lg:h-[500px] mx-auto" src="public/Assets/aboutusbg.jpg" alt="" />
                </div>
                <div className="absolute rounded-lg inset-0 lg:h-[500px] bg-black opacity-40 z-0"></div>
                <div className="absolute   z-10 inset-0 flex flex-col items-center justify-center">
                    <h1 className="lg:w-[70%] px-2 text-center text-xl md:text-3xl lg:text-4xl font-bold text-white"><span  className=" text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-700 via-amber-500 to-green-400 text-transparent bg-clip-text animate-gradient">HouseHunter</span>: Your Trusted Partner in Real Estate</h1>
                    <p className="lg:w-[75%] text-center text-gray-50 text-sm md:text-base lg:text-base py-1 md:py-4 lg:py-4 font-normal px-1">At HouseHunter, we specialize in helping you find your ideal residential property. We are dedicated to providing personalized service and expert guidance.Our team is here to assist you every step of the way.</p>
                    <Link href="#_" className="relative inline-flex items-center justify-start  px-5 py-2 md:py-3 lg:py-3 overflow-hidden font-bold rounded-full group">
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Contact With Us</span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                    </Link>
                </div>
            </div>
            <div>
                <div className="">
                    <Location/>
                </div>
                <div className="py-12">
                    <h1 className="text-4xl text-black font-bold text-center py-4">Our Core Services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 px-4 md:px-2 lg:px-0 animate__animated animate__fadeInLeftBig animate__slower">
                        <div className="text-center bg-slate-800 text-white p-5 rounded-xl ">
                            <h1 className="text-2xl text-secondary font-bold pb-2">Residential Sales</h1>
                            <p className="text-base font-medium">Assisting clients in buying and selling single-family homes, townhouses, condos, and apartments.</p>
                        </div>
                        <div className="text-center bg-slate-800 text-white p-5 rounded-xl ">
                            <h1 className="text-2xl font-bold pb-2 text-secondary">Residential Rentals</h1>
                            <p className="text-base font-medium">Helping clients find and lease rental properties.Our residential rental services extend beyond finding the perfect property. </p>
                        </div>
                        <div className="text-center bg-slate-800 text-white p-5 rounded-xl ">
                            <h1 className="text-2xl font-bold pb-2 text-secondary">Commercial Real Estate</h1>
                            <p className="text-base font-medium">Assisting clients in buying, selling, and leasing commercial properties, such as office spaces, retail stores, and warehouses.</p>
                        </div>
                        <div className="text-center bg-slate-800 text-white p-5 rounded-xl">
                            <h1 className="text-2xl font-bold pb-2 text-secondary">Land and Lot Sales</h1>
                            <p className="text-base font-medium">Assisting clients in buying and selling land for development or investment purposes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutUs;