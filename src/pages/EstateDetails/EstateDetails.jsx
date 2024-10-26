import { useLoaderData } from "react-router-dom";

const EstateDetails = () => {
    const estate = useLoaderData();
    console.log(estate);
    const{estate_title,image,description,price,location,facilities,status}=estate;
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-396px)]">
            <section className=" dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row-reverse">
                <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-7 lg:w-1/2 xl:w-3/5 dark:bg-violet-600 dark:text-gray-50">
                    <div className="flex space-x-2 sm:space-x-4">
                    <div className="space-y-2">
                        <p className="text-xl font-bold leading-snug">
                        {estate_title}
                        </p>
                        <p className="leading-snug">
                        {description}
                        </p>
                        <p className="text-lg font-medium leading-snug">
                        <span className="font-bold text-black">Price :</span> {price}
                        </p>
                        <p className="text-lg font-medium leading-snug">
                        <span className="font-medium text-black">Location :</span> {location}
                        </p>
                        <div className="flex flex-col md:flex-row lg:flex-row justify-start  gap-3 text-lg font-medium leading-snug">
                            <p className="font-medium text-black">Facilities :</p>
                            <p>{facilities[0]}</p>
                            <p>{facilities[1]}</p>
                            <p>{facilities[2]}</p>
                        </div>
                        <p className="text-lg font-medium leading-snug">
                        <span className="font-medium text-black">Status :</span> {status}
                        </p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-2/5 dark:bg-gray-100">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <img
                        src={image}
                        alt=""
                        className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                    />
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default EstateDetails;
