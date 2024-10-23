import React from 'react';
import CTAButton from '../Components/CTAButton';
import Carousel from '../Components/Carousel';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const pictures = [
    { title: "La Polinesia Francesa", picture: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-polinesia-1.jpg" },
    { title: "Cataratas de Iguazú, Brasil y Argentina", picture: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-cataratas-de-iguazu-1.jpg" },
    { title: "La Montaña de Colores en Perú", picture: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-monta%C3%B1a-de-colores-2.jpg" },
    { title: "Trolltunga en Noruega", picture: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-impresionantes-del-mundo-noruega-1.jpg" },
    { title: "La Cueva de Benagil", picture: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-portugal-1.jpg" },
    { title: "El Salto del Ángel en Venezuela", picture: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-salto-del-angel-1.jpg" },
    { title: "Cristo Redentor, Rio de Janeiro", picture: "https://media.iatiseguros.com/wp-content/uploads/2018/08/04005832/maravillas-del-mundo-18.jpg" },
    { title: "El Gran Cañón del Colorado, Estados Unidos", picture: "https://media.iatiseguros.com/wp-content/uploads/2018/08/04005833/maravillas-del-mundo-17.jpg" },
    { title: "Roma, Italia", picture: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/E6C8/production/_96908095_gettyimages-539115110.jpg.webp" },
    { title: "Glaciar Perito Moreno, Argentina", picture: "https://media.iatiseguros.com/wp-content/uploads/2018/08/04005841/maravillas-del-mundo-4.jpg" },
    { title: "Machu Picchu, Perú", picture: "https://media.iatiseguros.com/wp-content/uploads/2018/08/04005835/maravillas-del-mundo-1.jpg" },
    { title: "Moáis de la Isla de Pascua, Chile", picture: "https://media.iatiseguros.com/wp-content/uploads/2018/08/04005834/maravillas-del-mundo-9.jpg" }
];

export default function Home() {

    const navigate = useNavigate();

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
                    <p className='text-2xl text-center p-20 '>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                </div>
                <div className='m-5'>
                    <Carousel pictures={pictures} intervalo={4000} />
                </div>
            </div>
        </>
    );
}
