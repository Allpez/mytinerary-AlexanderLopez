import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomeButtomNavigate({ rute, title }) {
    const navigate = useNavigate();

    function handleClickHome(rut) {
        navigate(rut);
    }
    return (
        <button
            onClick={() => handleClickHome(rute)} className='bg-slate-500'
        >{title}</button >
    );
}

export default HomeButtomNavigate