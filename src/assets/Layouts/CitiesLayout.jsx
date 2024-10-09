import React from 'react'
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom";

export default function CitiesLayout() {
    return (
        <>
            <main className='h-auto'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
