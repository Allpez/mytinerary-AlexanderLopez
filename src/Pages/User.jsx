import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosWarning } from "react-icons/io";

function User() {
    const navigate = useNavigate();

    function handleClickHome(){
        navigate(-1)
    }


    return (
        <>
            <h4>this is User Login page</h4>
            <button onClick={() => handleClickHome()} className='text-7xl text-yellow-500 flex'><IoIosWarning /> Under Construction <IoIosWarning /></button>
        </>
    )
}

export default User