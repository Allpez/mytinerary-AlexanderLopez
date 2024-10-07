import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";
import cascada from "../images/cascada.jpg";
import logo from "../images/LogoMyTinerary.png";
import { NavLink } from "react-router-dom";

//Styles
import "../styles/StandarLayout.css";

//React Icons
import { FaUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaCity } from "react-icons/fa";
import { IoHome } from "react-icons/io5";


const routes = [
    { to: "/", text: "Home" },
    { to: "/cities", text: "Cities" },
    { to: "/user", text: "Login" },
]

const activeClass = "text-white font-extrabold my-2 text-2xl underline underline-offset-4"
const inactiveClass = "text-blue-600 my-2"


function StandarLayout() {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate('/home');
    }

    return (
        <>
            <div
                className="bg-cover bg-center h-screen bg-no-repeat bg-fixed fullScreenImage"
                style={{ backgroundImage: `url(${cascada})` }}
            >
                <SideBar />
                <header className='grow-0 flex items-center px-10 header h-20'>
                    <img
                        src={logo}
                        className='w-20 h-16 cursor-pointer'
                        alt="Logo-My-Itinerary"
                        onClick={handleLogoClick}
                    />
                    <h1
                        className='text-white text-center pe-10 mx-auto cursor-pointer text-3xl'
                        onClick={handleLogoClick}>
                        My Tinerary
                    </h1>
                </header>

                <main className='grow min-h-screen main flex flex-col justify-center items-center'>
                    <Outlet></Outlet>
                </main>

                <footer className='footer text-base flex justify-between text-white text-center w-full h-auto items-center pb-6 px-10'>
                    <nav className="">
                        <ul className="w-auto flex flex-col items-start">
                            {routes.map((r, index) => (
                                <li key={index} className='my-4'>
                                    <NavLink to={r.to} className={({ isActive }) => isActive ? activeClass : inactiveClass}>{r.text}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div>
                        <h4 className='p-5 underline underline-offset-4 text-2xl'>Find Us</h4>
                        <div className='flex items-center gap-4'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d6611.889425148859!2d-118.25092161004763!3d34.04528929035237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d34.0474673!2d-118.25298149999999!4m3!3m2!1d34.047716199999996!2d-118.25274549999999!5e0!3m2!1ses-419!2sco!4v1728341179272!5m2!1ses-419!2sco" width="200" height="120" className='map rounded-2 border' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                            <div className='flex flex-col items-start border-l-4 border-white'>
                                <p className='my-2 ms-4'>123 Street, City</p>
                                <a href="mailto:contact@mytinerary.com" className='my-2 ms-4'>contact@mytinerary.com</a>
                                <p className='my-2 ms-4'>Phone: (123) 456-7890</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col items-start'>
                        <h4 className='p-5 text-2xl underline underline-offset-4'>Follow Us</h4>
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
            </div>
        </>
    );
}

export default StandarLayout