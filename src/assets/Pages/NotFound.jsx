import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();

    function handleClickHome(){
        navigate("/home")
    }


    return (
        <>
            <div>NotFound</div>
            <p>This page is NotFound</p>

            <h1>Go back to Home</h1>
            <button onClick={() => handleClickHome()} className='border-2 rounded-xl border-black m-2 p-1'>Go back to Home</button>
        </>
    )
}
