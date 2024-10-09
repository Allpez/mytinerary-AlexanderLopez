import React from 'react'
import { useNavigate } from 'react-router-dom'

function User() {
    const navigate = useNavigate();

    function handleClickHome(){
        navigate(-1)
    }


    return (
        <>
            <div>User</div>
            <p>this is User Login page</p>
            <button onClick={() => handleClickHome()} className='border-2 rounded-xl border-black m-2 p-1'>Go back to Home</button>
        </>
    )
}

export default User