import React from 'react'
import { Outlet } from "react-router-dom";
import "../styles/Cities.css"
import SideBar from "../Components/SideBar";
import Header from "../Components/Header"
import Footer from "../Components/Footer"


function CitiesLayout() {
    return (
        <>
            <Header />
            <div
                className="bg-cover bg-center bg-no-repeat bg-fixed h-full"
            >
                <SideBar />
                <main className="grow min-h-screen flex flex-col justify-center items-center">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default CitiesLayout

