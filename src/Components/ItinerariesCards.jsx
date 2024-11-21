import React, { useState } from 'react';
import "../styles/ItinerariesCards.css";
import { FaHeart } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";

export default function ItinerariesCards({ itineraries }) {
    const [showMessage, setShowMessage] = useState(false);

    const handleViewMore = () => {
        setShowMessage(!showMessage);
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
                <div className="datosItinerario">
                    <div className='flex flex-col w-6/12 mt-28'>
                        <p className="text-gray-300 flex gap-2">Price: {money(itineraries.price)}</p>
                        <p className="text-gray-300 flex">Duration: {itineraries.duration} Hrs</p>
                        <p className="text-gray-300 flex gap-2">Likes: {itineraries.likes}<FaHeart className='text-red-700'></FaHeart></p>
                        <div className="flex flex-col justify-center mt-1">
                            <p className="text-gray-300 flex m-1">Hashtags:</p>
                            {itineraries.hashtags.map(tag => (
                                <span key={tag} className="text-sm w-auto text-gray-300 bg-gray-700 rounded-full px-3 py-1 m-1">{tag}</span>
                            ))}
                        </div>
                        <button
                            onClick={handleViewMore}
                            className="city-card-button mt-6 text-white bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            View Activities
                        </button>
                        {showMessage && (
                            <div className="mt-4 text-yellow-500 text-2xl">
                                Under Construction <IoIosWarning />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
