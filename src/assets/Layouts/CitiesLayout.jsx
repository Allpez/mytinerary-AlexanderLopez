import React from 'react'
import { Outlet } from "react-router-dom";
import "../styles/Cities.css"

function CitiesLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default CitiesLayout