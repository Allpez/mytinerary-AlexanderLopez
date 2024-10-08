import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";

//React Icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

const routes = [
    { to: "/", text: "Home" },
]



function NotFound() {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate("/home")
    }

    const activeClass = "text-white font-extrabold my-2 text-2xl underline underline-offset-4"
    const inactiveClass = "my-2"
    
    return (
        <>
            <div>NotFound</div>
            <p>This page is NotFound</p>
            <button onClick={() => handleClickHome()} className='border-2 rounded-xl border-black m-2 p-1'>Go back to Home</button>
            <footer className='footer text-base flex flex-col sm:flex-row md:flex-row justify-between gap-15 text-white text-center w-full h-auto items-center pb-6 px-20'>
                <nav >
                    <ul className="w-auto flex flex-col items-start">
                        {routes.map((r, index) => (
                            <li key={index} className='my-4'>
                                <NavLink to={r.to} className={({ isActive }) => isActive ? activeClass : inactiveClass}>{r.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='border-t-4 border-indigo-500 sm:border-none'>
                    <h4 className='p-5 underline underline-offset-4 text-2xl'>Find Us</h4>
                    <div className='flex flex-col items-center md:flex-row gap-4'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d6611.889425148859!2d-118.25092161004763!3d34.04528929035237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d34.0474673!2d-118.25298149999999!4m3!3m2!1d34.047716199999996!2d-118.25274549999999!5e0!3m2!1ses-419!2sco!4v1728341179272!5m2!1ses-419!2sco" width="200" height="120" className='map rounded-2 border' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className='flex flex-col items-start md:border-l-4 border-indigo-500'>
                            <p className='my-2 ms-4'>123 Street, City</p>
                            <a href="mailto:contact@mytinerary.com" className='my-2 ms-4'>contact@mytinerary.com</a>
                            <p className='my-2 ms-4'>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start border-t-4 border-indigo-500 sm:border-none'>
                    <h4 className='p-5 text-2xl underline underline-offset-4 px-12'>Follow Us</h4>
                    <a href="https://www.facebook.com/" target="_blank"
                        rel="noopener noreferrerr" className='flex text-2xl gap-4 items-center mb-2'>
                        <><FaFacebook className='cursor-pointer' />
                            <h5 className='hover:underline underline-offset-2 cursor-pointer'>Facebook</h5></>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank"
                        rel="noopener noreferrerr" className='flex text-2xl gap-4 items-center mb-2'>
                        <><FaInstagram className='cursor-pointer' />
                            <h5 className='hover:underline underline-offset-2 cursor-pointer'>Instagram</h5>
                        </>
                    </a>
                    <a href="https://x.com/" target="_blank"
                        rel="noopener noreferrerr" className='flex text-2xl gap-4 items-center mb-2'>
                        <><SlSocialTwitter className='cursor-pointer' />
                            <h5 className='hover:underline underline-offset-2 cursor-pointer'>X</h5></>
                    </a>
                </div>
            </footer>
        </>
    )
}


export default NotFound