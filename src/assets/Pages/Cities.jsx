import { useNavigate } from 'react-router-dom';
import "../styles/Cities.css";
import SearchBar from '../Components/SearchBar';
import ContainerCards from '../Components/ContainerCards';

function Cities() {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate(-1);
    };

    return (
        <>
            <SearchBar />
            <ContainerCards />
            <button 
                onClick={handleClickHome}
                className='my-Cities-Button rounded-xl p-5 m-5 hover:text-black text-2xl'
            >
                Go back
            </button>
        </>
    );
}

export default Cities;
