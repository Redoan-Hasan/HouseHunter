/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..
AOS.init();
const SingleEstate = ({ estate }) => {
const { id,estate_title, description, price, image, status } = estate;
    return (
        <div>
        <div data-aos="fade-up-right" data-aos-duration="1500" className="lg:h-[550px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 flex flex-col justify-between">
            <div data-aos="fade-up">
            <img
                src={image}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            </div>

            <div data-aos="fade-left" data-aos-duration="1500">
                <div  className="mt-6 mb-2">
                    <div className="flex justify-between items-center flex-grow">
                    <span className="block text-base font-bold tracking-widest uppercase dark:text-violet-600">
                        {price}
                    </span>
                    <span className="block text-base font-bold tracking-widest uppercase dark:text-violet-600">
                        {status}
                    </span>
                    </div>
                    <h2 className="text-xl font-semibold tracking-wide">
                    {estate_title}
                    </h2>
                </div>
                <p className="dark:text-gray-800">{description}</p>
                <div className="flex justify-center mt-auto pt-2">
                    <Link to={`/estateDetails/${id}`}><button className="btn btn-secondary ">View Details</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SingleEstate;
