import React from 'react'
import inConstructionPage from "../images/inConstructionPage.png"
import { useNavigate } from 'react-router-dom'
import "../styles/Cities.css"

function Cities() {

    const navigate = useNavigate();

    function handleClickHome() {
        navigate(-1)
    }

    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat bg-fixed flex items-end justify-center"
                style={{ backgroundImage: `url(${inConstructionPage})` }}
            >
                <button onClick={() => handleClickHome()} 
                className='my-Cities-Button rounded-xl p-5 mb-20 hover:bg-yellow-700 hover:text-black text-2xl'>Go back</button>
            </div>
        </>
    )
}

export default Cities
