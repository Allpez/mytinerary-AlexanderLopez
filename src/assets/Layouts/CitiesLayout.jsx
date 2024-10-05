import React from 'react'
import { Outlet } from "react-router-dom";

export default function CitiesLayout() {
    return (
        <>
            <header>
                <h1>Header</h1>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='flex-none'>
                <h2  className='bg-gray-900 flex justify-center text-white text-center w-full h-36 items-center'>Footer</h2>
            </footer>
        </>
    )
}
