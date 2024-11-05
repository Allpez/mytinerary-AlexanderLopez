import React from 'react';
import "../styles/ItinerariesCards.css";
import { FaHeart } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default function ItinerariesCards({ itineraries }) {
    const handleViewMore = (itineraries) => {
        console.log("Viewing more for:", itineraries);
    };

    function money(price) {
        return Array(price).fill(<FaMoneyBill1Wave className="text-green-500" />);
    }

    return (
        <div className='gallery flex flex-col justify-center items-center'>
            <div
                className='card rounded-lg img-box'
                style={{ backgroundImage: `url(${itineraries.photo})` }}
            >
                <h3 className="text-card text-white text-xl font-bold">{itineraries.name}</h3>
                <div className="datosItinerario absolute">
                    <div className='flex flex-col w-6/12 mt-28'>
                        <p className="text-gray-300 flex">Price: {money(itineraries.price)}</p>
                        <p className="text-gray-300 flex">Duration: {itineraries.duration} Hrs</p>
                        <p className="text-gray-300 flex">Likes: {itineraries.likes}<FaHeart className='text-red-700'></FaHeart></p>
                        <p className="text-gray-300 flex self-center">Hashtags: <br />{itineraries.hashtags}</p>
                        <button
                            onClick={() => handleViewMore(itineraries)}
                            className="city-card-button mt-auto text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            View Activities
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
