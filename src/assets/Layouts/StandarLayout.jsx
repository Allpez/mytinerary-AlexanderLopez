import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import cascada from "../images/cascada.jpg"
import "../styles/StandarLayout.css";

export default function StandarLayout() {
    return (
        <>
            <div
                className="bg-cover bg-center h-screen bg-no-repeat bg-fixed fullScreenImage"
                style={{ backgroundImage: `url(${cascada})` }}
            >
                <header className='grow-0 flex flex-col h-28 bg-gray-600'>
                    <h1 className='text-white text-center'>Header</h1>
                    <SideBar></SideBar>
                </header>
                <main className='grow min-h-screen flex flex-col justify-center items-center'>
                    <Outlet></Outlet>
                </main>
                <footer className='grow-0'>
                    <h2 className='bg-gray-900 flex justify-center text-white text-center w-full h-36 items-center'>Footer</h2>
                </footer>
            </div>
        </>
    )
}
