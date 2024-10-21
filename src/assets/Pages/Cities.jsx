import React, { useState } from 'react';
import inConstructionPage from "../images/inConstructionPage.png";
import { useNavigate } from 'react-router-dom';
import "../styles/Cities.css";
import SearchBar from '../Components/SearchBar';
import CallApi from '../Components/ApiCity';

function Cities() {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleClickHome = () => {
        navigate(-1);
    };

    const handleChangeText = (newText) => {
        setText(newText);
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${inConstructionPage})` }}
        >
            <SearchBar searchText={text} handleChangeText={handleChangeText} />
            <CallApi />
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
