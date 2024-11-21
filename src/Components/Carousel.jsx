import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const Carousel = ({ pictures, intervalo = 3000 }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsPorPagina = isMobile ? 1 : 4; 

  const avanzar = () => {
    setIndiceActual((prevIndice) =>
      prevIndice + itemsPorPagina >= pictures.length ? 0 : prevIndice + itemsPorPagina
    );
  };

  const retroceder = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? pictures.length - itemsPorPagina : prevIndice - itemsPorPagina
    );
  };

  useEffect(() => {
    const intervaloID = setInterval(avanzar, intervalo);
    return () => clearInterval(intervaloID);
  }, [indiceActual, intervalo]);

  const picturesEnPantalla = pictures.slice(indiceActual, indiceActual + itemsPorPagina);
  const picturesRellenadas = [...picturesEnPantalla];
  while (picturesRellenadas.length < itemsPorPagina) {
    picturesRellenadas.push(null);
  }

  const indicadores = Math.ceil(pictures.length / itemsPorPagina);

  return (
    <div className="carrusel flex w-auto flex-col items-center mt-5 justify-center">
      <div className="flex items-center justify-center space-x-4 my-carousel-container">
        <button onClick={retroceder} className="my-btn-carousel p-2 rounded-md hover:bg-gray-400 hover:text-black">
          ◀
        </button>

        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2 grid-rows-2"} gap-4 w-6/12 h-6/12`}>
          {picturesRellenadas.map((picture, index) => (
            <div key={index} className="relative picture-carrusel">
              {picture ? (
                <>
                  <img
                    src={picture.picture}
                    alt={picture.title}
                    className="rounded-lg shadow-md w-full sm:h-56 h-32  object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
                    {picture.title}
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <button onClick={avanzar} className="my-btn-carousel p-2 rounded-md hover:bg-gray-400 hover:text-black">
          ▶
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2 ">
        {Array.from({ length: indicadores }).map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${indiceActual / itemsPorPagina === idx ? "bg-gray-800" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
