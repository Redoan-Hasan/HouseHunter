import { Outlet } from "react-router-dom";
import Navbar from "../pages/Components/Navbar/Navbar";
import Footer from "../pages/Components/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;