import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/CityCards.css"

function CityCard({ city }) {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/CityDetails`, { state: { city } });
    };

    return (
        <div className="city-card sm:w-96 w-80 transition-transform duration-[1000ms] hover:scale-110 relative flex flex-col bg-white shadow-md rounded-lg">
            <div 
                className="city-card-image h-72 bg-cover bg-center relative" 
                style={{ backgroundImage: `url(${city.photo})` }}
            >
                <div className="absolute top-0 left-0 w-full p-2">
                    <h3 className="text-white text-xl font-bold">{city.name}</h3>
                    <p className="text-cards text-gray-300">{city.country}</p>
                </div>
            </div>
            <button 
                onClick={handleLearnMore} 
                className="city-card-button mt-auto text-white bg-blue-500 py-2 px-4 rounded-b-lg hover:bg-blue-700 transition duration-300"
            >
                Learn More
            </button>
        </div>
    );
}

export default CityCard;
