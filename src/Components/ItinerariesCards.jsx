import React from 'react';
import "../styles/ItinerariesCards.css";

export default function ItinerariesCards({ itineraries }) {
    const handleViewMore = (itineraries) => {
        console.log("Viewing more for:", itineraries);
    };

    return (
        <div className='gallery flex flex-col justify-center items-center'>
            <div
                className='card rounded-lg img-box'
                style={{ backgroundImage: `url(${itineraries.photo})` }}
            >
                <h3 className="text-card text-white text-xl font-bold">{itineraries.name}</h3>
                <div className="datosItinerario">
                    <p className="text-gray-300">{itineraries.price}</p>
                    <p className="text-gray-300">{itineraries.duration}</p>
                    <p className="text-gray-300">{itineraries.likes}</p>
                    <p className="text-gray-300 flex flex-col">{itineraries.hashtags}</p>
                    <button
                        onClick={() => handleViewMore(itineraries)}
                        className="city-card-button mt-auto text-white bg-blue-500 py-2 px-4 rounded-b-lg hover:bg-blue-700 transition duration-300"
                    >
                        View Activities
                    </button>
                </div>
            </div>
        </div>
    );
}
