import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const ProfileUpdate = () => {
    const{user,updatePhoto}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) =>{
        const name = data.name;
        const photo = data.photo;
        console.log(name,photo);
        updatePhoto(name,photo)
        .then(()=>{
            toast.success("Successfully Updated")
            window.location.reload()
        })
        .catch((error)=>toast.error(error.message.split('/')[1].replace(")", "")))
    }
    
    return (
        <div>
            <section className="py-6 dark:bg-[#1E2837] dark:text-white">
                <div className="grid p-5 grid-cols-1  mx-auto  md:grid-cols-2 md:divide-x">
                <div className="flex flex-col justify-center mx-4 p-6 shadow-md rounded-xl  dark:bg-gray-50 dark:text-gray-800">
                    <img
                    src={user.photoURL}
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                    />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">
                        User Name : {user.displayName}
                        </h2>
                        <p className="px-2 text-base sm:text-base font-medium truncate dark:text-gray-600">
                        photoURL : {user.photoURL}
                        </p>
                    </div>
                    
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" className="space-y-6 px-6">
                    <div>
                        <label htmlFor="name" className="text-lg font-medium">
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded dark:bg-gray-100 text-black"
                            {...register("name", { required: true })} 
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="text-lg font-medium">
                            New Photo URL
                        </label>
                        <input
                            id="photoURL"
                            type="url"
                            placeholder="New Photo URL"
                            className="w-full p-3 rounded dark:bg-gray-100 text-black"
                            {...register("photo", { required: true })} 
                        />
                        {errors.photo && <span>This field is required</span>}
                    </div>
                    <button
                    type="submit"
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
                    >
                    Submit
                    </button>
                </form>
                </div>
            </section>
        </div>
    );
};

export default ProfileUpdate;
