import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri"; 
import { logout, login } from "../store/actions/authActions"; 
import logo from "../images/LogoMyTinerary.png";
import "../styles/header.css";

function Header() {
    const token = useSelector((state) => state.authStore.token); // Obtener el token desde el estado
    const user = useSelector((state) => state.authStore.user); // Obtener el usuario desde el estado
    const navigate = useNavigate(); // Utilizamos el hook navigate
    const dispatch = useDispatch();

    const [isScrolled, setIsScrolled] = useState(false);

    // Detectar el desplazamiento de la página
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
        // Ejecuta el dispatch para login y luego redirige a home
        dispatch(login());
        navigate('/user');
    };

    const handleLogoutClick = () => {
        // Ejecuta el dispatch para logout y luego redirige a home
        dispatch(logout());
        navigate('/home');
    };

    return (
        <header className={`sticky top-0 flex items-center px-32 h-20 z-50 ${isScrolled ? 'bg-opacity-70' : 'bg-opacity-100'}`}>
            <img
                src={logo}
                className='logo w-24 h-16 cursor-pointer'
                alt="Logo-My-Itinerary"
                onClick={() => navigate('/home')} // Hacer clic en el logo también redirige a home
            />
            <h1
                className='text-white text-center pe-10 mx-auto cursor-pointer text-3xl sm:text-5xl'
                onClick={() => navigate('/home')} // Redirigir al home también al hacer clic en el título
            >
                My Tinerary
            </h1>

            <div className="flex items-center ml-auto">
                {token ? (
                    // Si el usuario está logueado, mostramos su foto, nombre y el ícono de logout
                    <div className="flex items-center space-x-3">
                        <img
                            src={user?.photo || "/default-profile.jpg"} // Foto del usuario, con valor predeterminado
                            alt="User Profile"
                            className="w-24 h-16 rounded-full border-2 border-sky-200"
                        />
                        <span className="text-white text-3xl">Hello, {user?.firstname}</span>
                        <RiLogoutBoxRLine
                            className="text-white text-4xl cursor-pointer"
                            onClick={handleLogoutClick} // Redirige a home al hacer clic en logout y ejecuta el dispatch
                        />
                    </div>
                ) : (
                    // Si el usuario no está logueado, mostramos el ícono de login
                    <FaUser
                        className="text-white text-3xl cursor-pointer"
                        onClick={handleLoginClick} // Redirige a home al hacer clic en login y ejecuta el dispatch
                    />
                )}
            </div>
        </header>
    );
}

export default Header;
