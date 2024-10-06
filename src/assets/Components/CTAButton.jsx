import React from 'react';
import '../styles/BlinkingCTA.css';

function BlinkingCTA() {
    return (
        <div className="container">
            <a href="#" className='CTAButton flex flex-col' style={{ '--clr': '#00ccff', '--i': 1 }}>
                <span>Life is now!</span>
            </a>
        </div>
    );
};

export default BlinkingCTA;