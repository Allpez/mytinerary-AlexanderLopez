import { useSelector } from 'react-redux';
import CityCard from './CityCard';

function ContainerCards() {
    const { cities, search, loading, error } = useSelector((state) => state.cityStore);


    if (loading) {
        return <div>loading...</div>;
    }

    if (error) {
        return <div>There was an error loading the cities.</div>;
    }

    const filteredCities = cities.filter((city) => {
        return city.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="flex flex-wrap justify-center gap-12 p-6">
            {filteredCities.length > 0 ? (
                filteredCities.map((city) => <CityCard key={city._id} city={city} />)
            ) : (
                <p className='text-7xl ms-10 my-24 flex gap-6 text-center text-white'>Sorry. There are no results for your search.</p>
            )}
        </div>
    );
}

export default ContainerCards;
