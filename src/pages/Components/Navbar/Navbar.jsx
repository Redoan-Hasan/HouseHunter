import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const navLinks = (
        <>
            <li><NavLink to='/' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '}`}>Home</NavLink></li>
            <li><NavLink to='/aboutUs' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '}`}>About Us</NavLink></li>
            <li><NavLink to='/login' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '}`}>Login</NavLink></li>
            <li><NavLink to='/contact' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '}`}>Contact with us</NavLink></li>
            {
                user? 
                <li><NavLink to='/updateProfile' className={({isActive})=>`text-lg font-semibold  !bg-transparent focus:bg-transparent !active:bg-transparent ${isActive?'bg-transparent border-primary border !text-primary': 'text-black '}`}>Update Profile</NavLink></li>:
                ''
            }
        </>
    );
    return (
        <div className="">
            <div className="navbar bg-base-100 w-full">
                <div className="navbar-start">
                    <div className="dropdown z-30">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-2 shadow"
                        >
                        {
                            navLinks
                        }
                        </ul>
                    </div>
                    <Link to='/'><img className=" h-[45px]" src="https://i.postimg.cc/sg8QfQdX/House-Hunter.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {
                        navLinks
                    }
                </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? 
                        <div className="flex justify-center items-center gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} >
                            <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"  src={user.photoURL} />
                            </div>
                            <button onClick={()=>logOut()} className="btn btn-active">SingOut</button>
                        </div> :
                        <Link to='/login' className="btn btn-active">Login</Link>
                    }
                </div>
            </div>
            <Tooltip className="z-50  bg-white" id="my-tooltip" />
        </div>
    );
};

export default Navbar;
