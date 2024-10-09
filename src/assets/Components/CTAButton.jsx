import React from 'react';
import '../styles/CTAButton.css';

function CTAButton({ onClick }) {

    return (
        <div className="container mt-14">
            <button
                onClick={onClick}
                className='CTAButton flex flex-col'
                style={{ '--clr': '#00ccff', '--i': 1 }}
            >
                <span>Life is now!</span>
            </button>
        </div>
    );
}

export default CTAButton;