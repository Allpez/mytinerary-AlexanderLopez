// ContainerItineraries.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItineraries } from '../store/actions/itineraryAction';
import ItinerariesCards from './ItinerariesCards';

export default function ContainerItineraries({ cityId }) {
    const dispatch = useDispatch();
    const { itineraries, loading, error } = useSelector((state) => state.itineraryStore);

    console.log("linea 11",itineraries.length);
    

    useEffect(() => {
        if (cityId) {
            dispatch(getItineraries(cityId)); 
        }
    }, [dispatch, cityId]);

    if (loading) return (<div className='text-white'>Loading...</div>);
    if (error) return <div>There was an error loading the itineraries.</div>;
    

    return (
        <div className='ContainerItineraries flex justify-center items-center m-20 p-10 rounded-lg w-8/10 h-auto'>
            {itineraries.length && !loading ? (
                itineraries.map(itinerary => (
                    <ItinerariesCards key={itinerary._id} itineraries={itinerary} />
                ))
            ) : (
                <p className='text-7xl ms-10 my-24 flex gap-6 text-center text-white'>Sorry. There are no itineraries for this city.</p>
            )}
        </div>
    );
}
