// CityDetails.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ContainerItineraries from "../Components/ContainerItineraries";
import { BiCameraMovie } from "react-icons/bi";

function CityDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const { city } = location.state || {};

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoHome = () => {
        navigate('/');
    };

    if (!city) {
        return <p>City not found</p>;
    }

    return (
        <>
            <div
                className="min-h-screen flex flex-col justify-between"
                style={{ backgroundImage: `url(${city.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="flex flex-col items-center justify-center bg-black bg-opacity-60 p-8 h-full text-white text-center">
                    <h1 className="text-7xl font-bold mb-4">{city.name}</h1>
                    <p className="text-2xl mb-6 p-20">{city.description}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-20 p-6 bg-gray-900 bg-opacity-80">
                    <div className='flex gap-10'>
                        <button onClick={handleGoHome} className="bg-green-500 w-36 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">Home</button>
                        <button onClick={handleGoBack} className="bg-blue-500 w-36 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Go Back</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-white flex text-center justify-center items-center text-5xl m-10'>Celebrity <br /> Recommendations
                        <div className='m-5'><BiCameraMovie /></div>
                    </h2>
                    <ContainerItineraries cityId={city._id} />
                </div>
            </div>
        </>
    );
}

export default CityDetails;
