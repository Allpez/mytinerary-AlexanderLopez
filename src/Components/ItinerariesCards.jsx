import React from 'react'
import "../styles/ItinerariesCards.css"
import { IoIosWarning } from "react-icons/io";


export default function ItinerariesCards() {







  return (
    <>
    <div className='gallery flex justify-center items-center'>
        <div className='img-box ' style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/57/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2828074883999%29_%28cropped_2%29.jpg)`}}><h4>Author</h4></div>
        <div className='img-box' style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/57/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2828074883999%29_%28cropped_2%29.jpg)`}}><h4>Author</h4></div>
        <div className='img-box' style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/57/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2828074883999%29_%28cropped_2%29.jpg)`}}><h4>Author</h4></div>
        <div className='img-box' style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/57/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2828074883999%29_%28cropped_2%29.jpg)`}}><h4>Author</h4></div>
    </div>
    {/* <p className='text-7xl text-yellow-500 flex'><IoIosWarning /> Under Construction <IoIosWarning /></p> */}

    </>
  )
}





























// import React from 'react';
// // import "../styles/CityCards.css"

// function ItinerariesCards({ itinerary }) {

//     const handleViewnMore = () => {
        
//     };

//     return (
//         <div className="city-card sm:w-96 w-80 transition-transform duration-[1000ms] hover:scale-110 relative flex flex-col bg-white shadow-md rounded-lg">
//             <div 
//                 className="city-card-image h-72 bg-cover bg-center relative" 
//                 // style={{ backgroundImage: `url(${city.photo})` }}
//             >
//                 <div className="absolute top-0 left-0 w-full p-2 bg-gradient-to-t from-black via-transparent to-transparent">
//                     <img src={itinerary.photo} alt="" />
//                     <h3 className="text-white text-xl font-bold">{itinerary.name}</h3>
//                     <p className="text-gray-300">{itinerary.price}</p>
//                     <p className="text-gray-300">{itinerary.duration}</p>
//                     <p className="text-gray-300">{itinerary.likes}</p>
//                     <p className="text-gray-300">{itinerary.hashtags}</p>
//                 </div>
//             </div>
//             <button 
//                 onClick={handleViewnMore} 
//                 className="city-card-button mt-auto text-white bg-blue-500 py-2 px-4 rounded-b-lg hover:bg-blue-700 transition duration-300"
//             >
//                 View more
//             </button>
//         </div>
//     );
// }

// export default ItinerariesCards;
