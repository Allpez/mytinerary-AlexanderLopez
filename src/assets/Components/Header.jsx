import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../images/LogoMyTinerary.png";
import "../styles/header.css"

function Header() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    function handleLogoClick() {
        navigate('/');
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);  
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky top-0 flex items-center px-10 h-20 z-50 ${isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'}`}>
            <img
                src={logo}
                className='w-24 h-16 cursor-pointer'
                alt="Logo-My-Itinerary"
                onClick={handleLogoClick}
            />
            <h1
                className='text-white text-center pe-10 mx-auto cursor-pointer text-3xl'
                onClick={handleLogoClick}>
                My Tinerary
            </h1>
        </header>
    );
}

export default Header;
