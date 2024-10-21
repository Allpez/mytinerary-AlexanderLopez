import React from 'react';
import { useState } from 'react';
import inConstructionPage from "../images/inConstructionPage.png";
import { useNavigate } from 'react-router-dom';
import "../styles/Cities.css";
import SearchBar from '../Components/SearchBar';

function Cities() {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate(-1);
    }

    const [text, setText] = useState("");

    // Actualiza el texto con lo que se escribe en el input
    const handleChangeText = (newText) => {
        setText(newText);
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${inConstructionPage})` }}
        >
            <SearchBar searchText={text} handleChangeText={handleChangeText} />
            <button 
                onClick={handleClickHome}
                className='my-Cities-Button rounded-xl p-5 hover:bg-yellow-700 hover:text-black text-2xl'
            >
                Go back
            </button>
        </div>
    );
}

export default Cities;