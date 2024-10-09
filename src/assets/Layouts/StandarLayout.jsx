import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import cascada from "../images/cascada.jpg";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

//Styles
import "../styles/StandarLayout.css";

function StandarLayout() {

    return (
        <>
            <Header />
            <div
                className="bg-cover bg-center bg-no-repeat bg-fixed h-full fullScreenImage"
                style={{ backgroundImage: `url(${cascada})` }}
            >
                <SideBar />
                <main className='grow min-h-screen main flex flex-col justify-center items-center'>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default StandarLayout;
