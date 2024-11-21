import React, { useEffect, useState } from 'react';
import CTAButton from '../Components/CTAButton';
import Carousel from '../Components/Carousel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/home.css';

export default function Home() {
    const [pictures, setPictures] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        // Función para obtener datos de la API
        const fetchPictures = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/cities/all");
                const cities = response.data.response; 
                const formattedPictures = cities.map(city => ({
                    title: city.name,
                    picture: city.photo
                }));
                setPictures(formattedPictures); 
            } catch (error) {
                console.error('Error fetching pictures:', error);
            }
        };

        fetchPictures();
    }, []); 

    function handleCTAClick() {
        navigate('/Cities');
    }

    return (
        <>
            <div className='flex flex-col justify-between'>
                <div className='h-screen flex flex-col justify-center items-center'>
                    <h1 className='text-white text-banner text-5xl'>My Tinerary</h1>
                    <p className='text-white text-banner text-center p-10 text-2xl'>“Find your perfect trip, designed by insiders who know and love their cities!”</p>
                    <CTAButton onClick={handleCTAClick} />
                </div>
                <div className='h-full flex flex-col justify-center items-center my-text text-white'>
                    <h2 className='pt-16 text-4xl text-center m-4'>Find the perfect destination</h2>
                    <p className='text-2xl text-center p-24 '>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                </div>
                <div className='m-5 carousel'>
                    <Carousel pictures={pictures} intervalo={4000} />
                </div>
            </div>
        </>
    );
}
