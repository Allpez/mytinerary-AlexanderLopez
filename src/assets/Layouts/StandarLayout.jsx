import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function StandarLayout() {
    return (
        <> 
            <header className='flex-none'>
                <h1 className='bg-gray-900 text-white text-center'>Header</h1>
                <SideBar></SideBar>
            </header>
            <main className='flex grow h-full'>
                <Outlet></Outlet>
            </main>
            <footer className='flex-none'>
                <h2  className='bg-gray-900 flex justify-center text-white text-center w-full h-36 items-center'>Footer</h2>
            </footer>
        </>
    )
}
 