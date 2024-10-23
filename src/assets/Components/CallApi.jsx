import React, { useEffect, useState } from 'react';
import CityCard from './CityCard';
import { VscSearchStop } from "react-icons/vsc";

function CallApi({ searchText }) {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                let url = "http://localhost:8080/api/cities/all";
                
                if (searchText) {
                    url += `?name=${searchText}`;
                }
                
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}`);
                }
                const data = await res.json();
                setCities(data.response || []);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCities();
    }, [searchText]);  

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className=" flex flex-wrap justify-center gap-12 p-6">
            {cities.length > 0 ? (
                cities.map((city) => <CityCard key={city.id} city={city} />)
            ) : (
                <p className='text-7xl ms-10 my-24 flex gap-6 text-center text-white'>Sorry. There are no results for your search.<VscSearchStop /></p>
            )}
        </div>
    );
}

export default CallApi;
