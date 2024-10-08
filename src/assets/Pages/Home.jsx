import React from 'react'
import BlinkingCTA from '../Components/CTAButton';
import Carousel from '../Components/Carousel';
import '../styles/home.css'

export default function Home() {
    return (
        <>
            <div className='flex flex-col justify-between'>
                <div className='h-screen flex flex-col justify-center items-center'>
                    <h1 className='text-white text-banner text-5xl '>My Tinerary</h1>
                    <p className='text-white text-banner my-10 text-2xl'>“Find your perfect trip, designed by insiders who know and love their cities!”</p>
                    <BlinkingCTA></BlinkingCTA>
                </div>
                <div className='h-auto flex flex-col justify-center items-center my-text text-white'>
                    <h2 className='pt-20 text-4xl text-center m-4'>Find the perfect destination</h2>
                    <p className='text-2xl text-center p-24 '>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                </div>
                <div className=''>
                    <Carousel></Carousel>
                </div>
            </div>
        </>
    )
}
