import { useDispatch, useSelector } from 'react-redux';
import { changeSearch } from '../store/actions/cityActions';
import { FaSearchLocation } from "react-icons/fa";

const SearchBar = () => {

    const { search } = useSelector((state)=>state.cityStore);
    const dispatch = useDispatch();
  

    return (
        <div className="flex gap-1 justify-center my-14">
            <input
                className="border-2 min-w-80 border-sky-500 rounded-lg ps-2 sm:h-9 px-3"
                type="search"
                value={search}
                onChange={(e) => dispatch(changeSearch(e.target.value))}
                required=""
                placeholder="Search by city..."
            /><span className="text-3xl flex items-center pl-3">
                <FaSearchLocation className="text-sky-500" />
            </span>
        </div>
    );
}

export default SearchBar;
