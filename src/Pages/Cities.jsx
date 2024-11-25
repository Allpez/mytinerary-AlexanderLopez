import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "../styles/Cities.css";
import SearchBar from '../Components/SearchBar';
import ContainerCards from '../Components/ContainerCards';
import { getCities } from '../store/actions/cityActions';

function Cities() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCities()); 
    }, [dispatch]);

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
