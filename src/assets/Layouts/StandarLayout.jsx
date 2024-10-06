import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";
import cascada from "../images/cascada.jpg";
import logo from "../images/LogoMyTinerary.png";
import "../styles/StandarLayout.css";
import HomeButtomNavigate from "../Components/HomeButtom"


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
                <header className='grow-0 flex items-center px-10 header h-28'>
                    <img
                        src={logo}
                        className='w-24 h-24 cursor-pointer'
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

                <footer className='grow-0'>
                    <h2 className='bg-gray-900 flex justify-center text-white text-center w-full h-36 items-center'>Footer</h2>
                </footer>
            </div>
        </>
    );
}

export default StandarLayout