import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CTAButton.css';

function BlinkingCTA() {
    const navigate = useNavigate();

    function handleClickCities(rut) {
        navigate(rut);
    }

    return (
        <div className="container mt-14">
            <button
                onClick={handleClickCities}
                className='CTAButton flex flex-col'
                style={{ '--clr': '#00ccff', '--i': 1 }}
            >
                <span>Life is now!</span>
            </button>
        </div>
    );
}

export default BlinkingCTA;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/CTAButton.css';

// function BlinkingCTA() {
//     return (
//         <div className="container mt-14">
//             <a href="#" className='CTAButton flex flex-col' style={{ '--clr': '#00ccff', '--i': 1 }}>
//                 <span>Life is now!</span>
//             </a>
//         </div>
//     );
// };

// export default BlinkingCTA;




// function HomeButtomNavigate({ rute, title }) {
//     const navigate = useNavigate();

//     function handleClickHome(rut) {
//         navigate(rut);
//     }
//     return (
//         <button
//             onClick={() => handleClickHome(rute)} className='bg-slate-500'
//         >{title}</button >
//     );