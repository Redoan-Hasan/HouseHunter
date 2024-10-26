import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import SingleEstate from "./SingleEstate";


const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold  text-center py-4">Take a look at what we are offering</h1>
                <Slider/>
            </div>
            <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-5 px-2">
                {
                    estates.map((estate,idx)=><SingleEstate  key={idx} estate={estate}/>)
                }
            </div>
        </div>
    );
};

export default Home;