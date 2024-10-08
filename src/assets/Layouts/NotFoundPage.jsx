import React from 'react'
import { Outlet } from "react-router-dom";

export default function CitiesLayout() {
    return (
        <>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}
