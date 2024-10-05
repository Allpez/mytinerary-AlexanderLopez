import React from 'react'
import BlinkingCTA from '../Components/CTAButton';
import Carousel from '../Components/Carousel';


export default function Home() {
    return (
        <>
            <div className='flex flex-col'>
                <h1>Home</h1>
                <p>this is Home page</p>
                <BlinkingCTA></BlinkingCTA>
                <Carousel></Carousel>
            </div>
        </>
    )
}
