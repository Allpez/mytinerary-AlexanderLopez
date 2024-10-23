import React from 'react';
import { FaSearchLocation } from "react-icons/fa";

function SearchBar({ searchText, handleChangeText }) {
    return (
        <div className="flex gap-1 justify-center my-6">
            <input
                className="border-2 min-w-80 border-sky-500 rounded-lg ps-2 sm:h-9 px-3"
                type="search"
                placeholder="Search by city..."
                value={searchText}
                onChange={(e) => handleChangeText(e.target.value)}
                required=""
            /><span className="text-3xl flex items-center pl-3">
                <FaSearchLocation className="text-sky-500" />
            </span>
        </div>
    );
}

export default SearchBar;
