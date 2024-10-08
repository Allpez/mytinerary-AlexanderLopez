import React from 'react';
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import SideBar from "../Components/SideBar";
import cascada from "../images/cascada.jpg";
import logo from "../images/LogoMyTinerary.png";

//Styles
import "../styles/StandarLayout.css";

//React Icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

const routes = [
    { to: ("/"), text: "Home" },
    { to: "/cities", text: "Cities" },
    { to: "/user", text: "Login" },
]

const activeClass = "text-white font-extrabold my-2 text-2xl underline underline-offset-4";
const inactiveClass = "my-2";

function StandarLayout() {
    const navigate = useNavigate();

    function handleLogoClick() {
        navigate('/');
    }

    return (
        <>
            <header className='sticky top-0 header flex items-center px-10 h-20 z-50'>
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

            <div
                className="bg-cover h-full bg-center bg-no-repeat bg-fixed fullScreenImage"
                style={{ backgroundImage: `url(${cascada})` }}
            >
                <SideBar />

                <main className='grow min-h-screen main flex flex-col justify-center items-center'>
                    <Outlet />
                </main>
                
                <footer className='footer text-base flex flex-col sm:flex-row md:flex-row justify-between gap-15 text-white text-center w-full h-auto items-center sm:items-baseline pb-6 px-20'>
                    <nav>
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
                        <div className='flex flex-col items-center lg:flex-row gap-4'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2337.6214015510795!2d-118.25280233772543!3d34.04654160965272!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1728429031652!5m2!1ses!2sco" width="200" height="120" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                            <div className='flex flex-col items-start lg:border-l-4 border-indigo-500'>
                                <p className='my-2 ms-4'>123 Street, City</p>
                                <a href="mailto:contact@mytinerary.com" className='my-2 ms-4'>contact@mytinerary.com</a>
                                <p className='my-2 ms-4'>Phone: (123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start border-t-4 border-indigo-500 sm:border-none'>
                        <h4 className='p-5 text-2xl underline underline-offset-4 px-12'>Follow Us</h4>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
                            <FaFacebook className='cursor-pointer' />
                            <h5 className='hover:underline underline-offset-2 cursor-pointer'>Facebook</h5>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
                            <FaInstagram className='cursor-pointer' />
                            <h5 className='hover:underline underline-offset-2 cursor-pointer'>Instagram</h5>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className='flex text-2xl gap-4 items-center mb-2'>
                            <SlSocialTwitter className='cursor-pointer' />
                            <h5 className='hover:underline underline-offset-2 cursor-pointer'>X</h5>
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default StandarLayout;
