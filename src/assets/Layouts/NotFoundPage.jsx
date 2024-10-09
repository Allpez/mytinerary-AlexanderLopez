import React from 'react'
import { useNavigate } from 'react-router-dom'
import error404 from "../images/page-not-found.jpg";
import Footer from "../Components/Footer"
import "../styles/NotFoundPage.css"


function NotFoundPage() {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate("/")
    }

    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${error404})` }}
            >
                <main className='flex flex-col justify-center items-center'>
                    <button onClick={() => handleClickHome()}
                        className='my-notFound-Button rounded-xl p-5 fixed top-32 hover:bg-cyan-600 hover:text-black text-2xl'>
                        Go back to Home
                    </button>
                </main>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default NotFoundPage