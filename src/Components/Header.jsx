import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri"; 
import { logout, login } from "../store/actions/authActions"; 
import logo from "../images/LogoMyTinerary.png";
import "../styles/header.css";
import userImg from "../images/userImg.png"

function Header() {
    const token = useSelector((state) => state.authStore.token);
    const user = useSelector((state) => state.authStore.user); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isScrolled, setIsScrolled] = useState(false);

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

    const handleLoginClick = () => {
        dispatch(login());
        navigate('/SignIn');
    };

    const handleLogoutClick = () => {
        dispatch(logout());
        navigate('/home');
    };

    return (
        <header className={`sticky top-0 flex items-center h-20 z-50 ${isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'}`}>
            <img
                src={logo}
                className='logo w-24 h-16 sm:ms-16 cursor-pointer'
                alt="Logo-My-Itinerary"
                onClick={() => navigate('/home')} 
            />
            <h1
                className='text-white text-center hidden md:block pe-10 mx-auto cursor-pointer text-3xl sm:text-5xl'
                onClick={() => navigate('/home')} 
            >
                My Tinerary
            </h1>

            <div className="flex items-center ml-auto">
                {token ? (
                    <div className="flex items-center justify-center gap-3 me-16">
                        <img
                            src={user?.photo || userImg} 
                            alt="User Profile"
                            className=" w-16 md:w-20 md:h-16 rounded-full border-2 border-sky-200"
                        />
                        <span className="text-white text-xl md:text-3xl">Hello, {user?.firstname}</span>
                        <RiLogoutBoxRLine
                            className="text-white text-4xl cursor-pointer"
                            onClick={handleLogoutClick} 
                        />
                    </div>
                ) : (
                    <FaUser
                        className="text-white text-3xl me-16 cursor-pointer"
                        onClick={handleLoginClick}
                    />
                )}
            </div>
        </header>
    );
}

export default Header;
