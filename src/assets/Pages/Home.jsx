import React from 'react'
import BlinkingCTA from '../Components/CTAButton';
import Carousel from '../Components/Carousel';


export default function Home() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-banner text-5xl '>My Tinerary</h1>
                <p className='text-white text-banner text-2xl'>“Find your perfect trip, designed by insiders who know and love their cities!”</p>
                <BlinkingCTA></BlinkingCTA>

                <Carousel></Carousel>
            </div>
        </>
    )
}
