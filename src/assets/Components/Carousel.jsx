import React, { useState } from 'react';
import "../styles/carousel.css"

//importado de imagenes
import imagen1 from '../images/OZ78aa.veligandu-island-beach-of-the-maldives-795x360.jpg';

const Carrusel = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    [
      { img: 'https://steemitimages.com/640x0/https://steemitimages.com/DQmP4sCCp7ywt7AKXqy1dis71bgyAz5NerDtvvXFkiCE6iG/image.png', url: 'https://steemitimages.com/640x0/https://steemitimages.com/DQmP4sCCp7ywt7AKXqy1dis71bgyAz5NerDtvvXFkiCE6iG/image.png' },
      { img: 'https://steemitimages.com/DQmUT9w3BdmsrcGz6htdepaFUoPVDs67qK6sVUqoxhNV3Li/image.png', url: 'https://steemitimages.com/DQmUT9w3BdmsrcGz6htdepaFUoPVDs67qK6sVUqoxhNV3Li/image.png' },
      { img: 'https://steemitimages.com/640x0/https://steemitimages.com/DQmdQFUwpsA4eLyvdmfohEEVgGadefNaLxXKvFQDD9cA9Je/image.png', url: 'https://steemitimages.com/640x0/https://steemitimages.com/DQmdQFUwpsA4eLyvdmfohEEVgGadefNaLxXKvFQDD9cA9Je/image.png' },
      { img: 'https://steemitimages.com/640x0/https://steemitimages.com/DQmdw6hv6TnhERLDe8DJCfQY2vQt1G9fR8kQt91bUNnihxp/image.png', url: 'https://steemitimages.com/640x0/https://steemitimages.com/DQmdw6hv6TnhERLDe8DJCfQY2vQt1G9fR8kQt91bUNnihxp/image.png' },
    ],
    [
      { img: imagen1, url: 'https://link.com/5' },
      { img: 'link-imagen-6', url: 'https://link.com/6' },
      { img: 'link-imagen-7', url: 'https://link.com/7' },
      { img: 'link-imagen-8', url: 'https://link.com/8' },
    ],
    [
      { img: 'link-imagen-9', url: 'https://link.com/9' },
      { img: 'link-imagen-10', url: 'https://link.com/10' },
      { img: 'link-imagen-11', url: 'https://link.com/11' },
      { img: 'link-imagen-12', url: 'https://link.com/12' },
    ],
  ];

  const nextSection = () => {
    setActiveSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  return (
    <div className="carrusel-container">
      <button onClick={prevSection}>Anterior</button>

      <div className="imagenes-seccion">
        {sections[activeSection].map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={`Imagen ${index + 1}`} />
          </a>
        ))}
      </div>

      <button onClick={nextSection}>Siguiente</button>

      <div className="paginacion">
        {sections.map((_, index) => (
          <span
            key={index}
            className={index === activeSection ? 'active' : ''}
            onClick={() => setActiveSection(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
