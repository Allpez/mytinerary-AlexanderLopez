import React, { useEffect, useState } from 'react';

function CallApi() {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching cities...");  // Agrega un mensaje para saber que la solicitud comenzó

        fetch("http://localhost:8080/api/cities/all")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log("Data received:", data);  // Agrega un mensaje para saber si los datos llegaron
                setCities(data.response || []);  // Maneja la respuesta si está vacía o undefined
            })
            .catch(error => {
                console.error("Failed to fetch cities:", error);  // Muestra el error en la consola
                setError(error.message);  // Guarda el mensaje de error en el estado
            });
    }, []);

    if (error) {
        return <p>Error: {error}</p>;  // Muestra el error en la UI si ocurre
    }

    return (
        <div>
            <h2>City List</h2>
            {cities.length > 0 ? (
                <ul>
                    {cities.map((city) => (
                        <li key={city.id}>{city.name}</li>  // Asegúrate de que los campos coincidan con la estructura de tu API
                    ))}
                </ul>
            ) : (
                <p>Loading cities...</p>
            )}
        </div>
    );
}

export default CallApi;
