import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';


const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('HouseHunter', 'template_gq395wv', form.current, {
            publicKey: 'WLc1YMcMTcdJcXw6m',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
            toast.success("email send"),
            e.target.reset()
        )
    }
    return (
        <div className="my-4">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-[#1E2837] dark:text-white">
                <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                    Lets talk!
                    </h2>
                    <div className="dark:text-white">
                    Drop us a message
                    </div>
                </div>
                <img
                    src="https://mambaui.com/assets/svg/doodle.svg"
                    alt=""
                    className="p-6 h-52 md:h-64"
                />
                </div>
                <form ref={form} onSubmit={sendEmail} noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">
                    Full name
                    </label>
                    <input
                    name='from_name'
                    id="name"
                    type="text"
                    placeholder=""
                    className="w-full p-3 rounded text-black dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">
                    Email
                    </label>
                    <input
                    name="from_email"
                    id="email"
                    type="email"
                    className="w-full p-3 rounded text-black dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">
                    Message
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    rows="3"
                    className="w-full p-3 rounded text-black dark:bg-gray-100"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
                >
                    Send Message
                </button>
                </form>
            </div>
        </div>
    );
    };

export default ContactUs;
