import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import mountain from "../images/mountain.jpg";

//Styles
import "../styles/StandarLayout.css";

function StandarLayout() {

    return (
        <>
            <Header />
            <div
                className="bg-cover bg-center bg-no-repeat bg-fixed h-full"
                style={{ backgroundImage: `url(${mountain})` }}
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

