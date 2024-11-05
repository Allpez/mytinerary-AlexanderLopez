import React from 'react';
import ItinerariesCards from "./ItinerariesCards";
import "../styles/ItinerariesCards.css";

export default function ContainerItineraries() {
  return (
    <div className='ContainerItineraries flex justify-center items-center m-20 p-10 rounded-lg w-8/10 h-auto'>
        <ItinerariesCards />
    </div>
  );
}


















// import { useSelector } from 'react-redux';
// import ItinerariesCards from './ItinerariesCards';

// function ContainerItineraries() {
//     const { Itineraries, loading, error } = useSelector((state) => state.itineraryStore);


//     if (loading) {
//         return <div>loading...</div>;
//     }

//     if (error) {
//         return <div>There was an error loading the itineraries.</div>;
//     }

//     return (
//         <div className="flex flex-wrap justify-center gap-12 p-6 w-72 h-40">
//             {Itineraries.length > 0 ? (
//                 Itineraries.map((itinerary) => <ItinerariesCards key={itinerary._id} itinerary={itinerary} />)
//             ) : (
//                 <p className='text-7xl ms-10 my-24 flex gap-6 text-center text-white'>Sorry. There are no results for your search.</p>
//             )}
//         </div>
//     );
// }

// export default ContainerItineraries;
