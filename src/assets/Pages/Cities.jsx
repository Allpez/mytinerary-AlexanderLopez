import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Cities.css";
import SearchBar from '../Components/SearchBar';
import CallApi from '../Components/CallApi';

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
        <>
            <SearchBar searchText={text} handleChangeText={handleChangeText} />
            <CallApi searchText={text} />
            <button 
                onClick={handleClickHome}
                className='my-Cities-Button rounded-xl p-5 hover:text-black text-2xl'
            >
                Go back
            </button>
        </>
    );
}

export default Cities;
